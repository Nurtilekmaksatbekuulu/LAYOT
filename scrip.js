const data = [
    {
        title:"7:30",
        image:'1.png',
        description:'Boston',
    },
    {
        title:"8:15",
        image:'2.png',
        description:'Madrid',
    },
    {
        title:"Translate",
        image:'6.png',
        description:'Spanish',
    },
    {
        title:"Bike",
        image:'3.png',
        description:'13.1 Miles',
    },
    {
        title:"Boat",
        image:'4.png',
        description:'90.Minutes',
    },
    {
        title:"Drive",
        image:'5.png',
        description:'80.Miles',
    },
    {
        title:"Morning",
        image:'7.png',
        description:'Coffee',
    },
    {
        title:"Afternoon",
        image:'9.png',
        description:'Gym',
    },
    {
        title:"Nitht",
        image:'8.png',
        description:'Hot Tub',
    },
]
let container = document.createElement("div")

container.classList.add("container")


const renderFragment = ()=>{
    let fragment = new DocumentFragment();
    data.map((item,i)=>{
       let blok = document.createElement("div")
       blok.className = 'elem-blok'
       blok.innerHTML= `
       <h3>${item.title}</h3>
       <img width="50px" src =  ${item.image}>
       <h4>${item.description}</h4>`
        fragment.append(blok)
    })
    return fragment

}
container.append(renderFragment())

document.body.append(container)