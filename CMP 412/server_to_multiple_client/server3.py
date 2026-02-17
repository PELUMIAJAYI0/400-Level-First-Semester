#to be able to connect various clients to the server we use threading

import socket
#we use socket to cimmunicate

from _thread import *
import os

th = 0

def func(con): 
    #send message to client
    msg = input("enter message: ")
    con.sendall(bytes(msg.encode("ascii")))

    print("message sent")


    #receive message from client
    while True:
        #receive message from client
        data = con.recv(1024).decode()
        data = data.upper()

        if not data:
            print("end conversation")
            break

        print("message from client: ", data)

        data = data.upper()

        #send message to client
        con.sendall(bytes(data.encode("ascii")))


ss = socket.socket(family=socket.AF_INET, type=socket.SOCK_STREAM)
print("server start")


ip = socket.gethostname()
port = 9000

ss.bind((ip, port))

ss.listen(3)

while True:
    con, addr = ss.accept()

    print("address client connected: ", addr)

    #receive message from client
    data = con.recv(1024)

    print("message before decoding: ", data)

    #decode message
    data = data.decode()

    print("message after decoding: ", data)

    start_new_thread(func, (con,))
    th += 1
    #th = th + 1

    print("number of threads cient {0} and process id {1}: ".format(th, os.getpid()))


