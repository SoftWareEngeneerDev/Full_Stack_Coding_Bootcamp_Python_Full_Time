class  Song:
    #lyrics = ["Jazz","Raggae","Hip Hop"]
    def __init__(self, lyrics):
        self.lyrics = lyrics

    def sing_me_a_song(self):
        for i in range(0,len(self.lyrics)):
            print(self.lyrics[i])

stairway= Song(["There’s a lady who's sure","all that glitters is gold", "and she’s buying a stairway to heaven"])

print(stairway.sing_me_a_song())