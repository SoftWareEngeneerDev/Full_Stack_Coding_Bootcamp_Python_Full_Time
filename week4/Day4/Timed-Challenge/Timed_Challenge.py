def occurence(chaine, caractere):
    nb = 0
    list(chaine)
    for i in range(0,len(chaine)):
        if chaine[i] == caractere:
            nb = nb+1
    print("Le nombre  d'occurence de",caractere, "dans la chaine est :",nb)
    #mise a jour de l'exercice


occurence("je suis un homme plein de sens","m")