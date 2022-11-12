type Words ={
    [key:string]:string
}
class Dict{
    private words:Words
    constructor(){
        this.words={}
    }
    add(word:Word){
        if(this.words[word.term]===undefined){
            this.words[word.term]= word.def
        }
    }
    def(term:string){
        return this.words[term]
    }
    updt(word:Word|string,def?:string){
        if(word instanceof Word){
            if(this.words[word.term]!==undefined){
                this.words[word.term]=word.def
                //console.log(`update ${word.term} value to ${word.def}`)
            }
            else{
                //console.log(`updt error `)
            }
        }
        if(def){
            if(typeof word =='string')
            {
                this.words[word]=def
                //console.log('updt new value')
            }
        }
    }
    del(key:string)
    {
        if(this.words[key]===undefined){
            console.log("word is undefined")
        }
        else{
            delete this.words[key]
        }
    }
    info(){
        console.log(this.words)
    }
}
class Word{
    constructor(
        public term:string,
        public def: string
    ){}
}

const kimchi = new Word("kimchi","한국음식")
const kimchi_mk2 = new Word("kimchi","매움")
const dict = new Dict()
dict.add(kimchi)
console.log(dict.def("kimchi"))
dict.updt(kimchi_mk2)
console.log(dict.def("kimchi"))
dict.updt("kimchi","안매움")
console.log(dict.def("kimchi"))
dict.del("kimchi")
dict.info()
