class Menu {
  items: Array<string>;   pages: number;        
  constructor(item_list: Array<string>, total_pages: number) {
    this.items = item_list;    
    this.pages = total_pages;
  }
  list(): void {
    console.log("Our menu for today:");
    for(var i=0; i<this.items.length; i++) {
      console.log(this.items[i]);
    }
  }
} 
var sundayMenu = new Menu(["pancakes","waffles","orange juice"], 1);
sundayMenu.list();

class HappyMeal extends Menu {
    constructor(item_list: Array<string>, total_pages: number) {
      super(item_list, total_pages);
    }
  
    list(): void{
      console.log("Our special menu for children:");
      for(var i=0; i<this.items.length; i++) {
        console.log(this.items[i]);
      }
  
    }
  }
  
  var menu_for_children = new HappyMeal(["candy","drink","toy"], 1);
  
  menu_for_children.list();