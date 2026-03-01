import socket 

cs = socket.socket(family=socket.AF_INET, type=socket.SOCK_STREAM)

ip = socket.gethostname()
port = 9000

cs.connect((ip,port))

while True:
    
    msg = input("Enter a message or type byr to quir---> ")
    if msg.strip().lower() == "bye":
        print("conversation ends")
        break
    cs.sendall(msg.encode())
    
    data = cs.recv(1024).decode()
    
    print("server response---> ", data)