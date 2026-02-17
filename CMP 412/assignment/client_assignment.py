import socket

cs = socket.socket(family=socket.AF_INET, type=socket.SOCK_STREAM)

ip = socket.gethostname()
port = 9000

try:
    cs.connect((ip, port))
    print("Connected to server.")
except:
    print("Could not connect. Make sure the server is running first.")
    exit()

msg = ""

while msg.lower() != "bye":
    # Ask user for input matching the assignment requirements
    msg = input("\nAsk the server for 'time' (or type 'bye' to quit): ")
    
    # Send message to server
    cs.sendall(bytes(msg.encode("ascii")))

    if msg.lower() == "bye":
        break

    # Receive message from server
    data = cs.recv(1024).decode()

    print("Server replied: ", data)

cs.close()