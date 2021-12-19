from tkinter import *
fenetre = Tk()
fenetre.title("titre")
fenetre.geometry("400x300")
#labelA
name_labelA = Label(fenetre, text='Valeur de A: ')
name_labelA.grid(column=0, row=0, sticky='w')
v1 = StringVar()

name_entryA = Entry( fenetre, textvariable=v1, width=31 )
name_entryA.focus_set()
name_entryA.grid(column=1, row=0,sticky='sw', columnspan=1, padx=10)
#labelB
fenetre.title("titre")
fenetre.geometry("400x300")
name_labelB = Label(fenetre, text='Valeur de B: ')
name_labelB.grid(column=0, row=1, sticky='w')
v2 = StringVar()

name_entryB = Entry( fenetre, textvariable=v2, width=31 )
name_entryB.focus_set()
name_entryB.grid(column=1, row=1,sticky='sw', columnspan=1, padx=10)
name_labelB = Label(fenetre, text='Valeur de B: ')
name_labelB.grid(column=0, row=1, sticky='w')
v3 = StringVar()

name_entryC = Entry( fenetre, textvariable=v3, width=31 )
name_entryC.focus_set()
name_entryC.grid(column=1, row=2,sticky='sw', columnspan=1, padx=10)
name_labelC = Label(fenetre, text='la somme de A et B: ')
name_labelC.grid(column=0, row=2, sticky='w')
send_button = Button(fenetre, text="show the result", pady=2)
send_button.grid(column=4, row=3,sticky='sw', pady=20)
send_button = Button(fenetre, text="don't show any thing", pady=2, command=fenetre.quit)
send_button.grid(column=0, row=3,sticky='sw', pady=20)
def Calcul():
    V=int(entryA.get())+int(entryB.get())
    entryC.insert(0,V)

fenetre.mainloop()