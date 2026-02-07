import socket
#we use socket to cimmunicate

cs = socket.socket(family=socket.AF_INET, type=socket.SOCK_STREAM)
print("server start")


ip = socket.gethostname()
port = 9000

cs.connect((ip, port))

#send message to server
msg = input("enter message: ")
cs.sendall(bytes(msg.encode("ascii")))

print("message sent")

#receive message from server
data = cs.recv(1024).decode()

print("message from server: ", data)

#send message to server
msg = input("enter message as text: ")


while msg.strip().lower() !="bye":
    cs.sendall(bytes(msg.encode("ascii")))

    print("message sent")

    #receive message from server
    data = cs.recv(1024).decode()

    print("message from server: ", data)

    msg = input("enter message to server or type bye to quit: ")


