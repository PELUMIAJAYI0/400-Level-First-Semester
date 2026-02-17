import socket
import datetime # Imported to handle time functions

ss = socket.socket(family=socket.AF_INET, type=socket.SOCK_STREAM)
print("Server started. Waiting for connection...")

ip = socket.gethostname()
port = 9000

ss.bind((ip, port))
ss.listen(1) # Listening for 1 client

con, addr = ss.accept()
print("Client connected from: ", addr)

while True:
    # Receive message from client
    data = con.recv(1024).decode()
    
    if not data or data.lower() == "bye":
        print("Client ended the conversation.")
        break

    print(f"Client asked: {data}")

    # Logic to check if client is asking for time
    if "time" in data.lower():
        # Get current time
        current_time = datetime.datetime.now().strftime("%H:%M:%S")
        reply = f"The current time is: {current_time}"
    else:
        reply = "Please ask me for the 'time'."

    # Send the reply back to the client
    con.sendall(bytes(reply.encode("ascii")))
    print("Response sent to client.")

con.close()
ss.close()