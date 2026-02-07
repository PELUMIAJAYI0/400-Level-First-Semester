import socket
#we use socket to cimmunicate

ss = socket.socket(family=socket.AF_INET, type=socket.SOCK_STREAM)
print("server start")


ip = socket.gethostname()
port = 9000

ss.bind((ip, port))

ss.listen(3)

con, addr = ss.accept()

print("address client connected: ", addr)

#receive message from client
data = con.recv(1024)

print("message before decoding: ", data)

#decode message
data = data.decode()

print("message after decoding: ", data)

#send message to client
msg = input("enter message: ")
con.sendall(bytes(msg.encode("ascii")))

print("message sent")

#receive message from client
data = con.recv(1024).decode()
#data = data.upper()

print("message from client: ", data)

data = data.upper()

#send message to client
con.sendall(bytes(data.encode("ascii")))

