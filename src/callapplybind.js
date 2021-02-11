let obj={
  name:'vg',
  age:'21'
}

function maker(home,city){
  console.log(this.name+this.age+home+city)
}

maker.call(obj,'Vileparle','Mumbai')
maker.apply(obj,['Vileparle','Mumbai'])//In aaray

const binded = maker.bind(obj,'Mumbai','Vileparle');
console.log(binded);
