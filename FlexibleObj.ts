

function makeJuice(madBy: string, flavour: string,...
    properties: [string, any][]): any {
        const myJuice: any = {
            madeBy: 'Syeda Bano',
            falvour:'Mango',
            sugarTaste: '',
            Optional_ingr:['kumail','toothmalanga','nuddles','coffee'],
            feelLike:'',
            };
            for (const  [key, value] of properties){
                myJuice[key] = value;
            }
      return myJuice;
  
        }  
        const Juice: string = makeJuice('Bano','sugar cane',['sugarTaste','normal'],['include','tooetmalanga'],['feelLike','cold'],
                                          ['quality','dense-milky']);
        console.log(Juice);

        
    
       
