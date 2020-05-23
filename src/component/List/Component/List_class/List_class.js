class node
{
constructor(key,val)
{
this.val=val;
this.key = key;
this.next = null;
}
next()
{
    return this.next;
}

}
export default class List_class
{
    constructor()
    {
     this.head =null;
    }
    insert(key,val)
    {
    const Node = new node(key,val);
     if(this.head==null)
     {
      this.head = Node;
     }else{
         let temp = this.head;
         while(temp.next !==null)
         {
             temp = temp.next;
         }
         temp.next = Node;
     }
     return this.head;
    }
    remove(val)
    {
     if(this.head==null)
     return 0;
     if(this.head.val=== val)
     {
      this.head = this.head.next;
      return this.head;
     }else{
         let temp = this.head;
         while(temp.next !==null)
         {  if(temp.next.val===val)
             {temp.next = temp.next.next
              return 1;
             }
             if(temp.next)
             temp = temp.next;
         }
        
     }
     return 0;
    }
    traverse()
    {
        let node = this.head;
    const arr =[];
     while(node!==null)
     {
         arr.push(node.val);
         node = node.next;
     }
   
     return arr;
    }
    search(val)
    {
     let node = this.head;
     const anim = [];
     let i=0
     while(node !==null)
     {
         if(node.val ===val)
         {
             anim.push([node.key,node.key]);
             i=1
             break;
         }else
         {
             if(node.next !==null)
             {anim.push([node.key,node.next.key])
                anim.push([node.next.key,node.key])
            }
             else{
                 anim.push([node.key,node.key])
                
             }
            node = node.next
         }

     }
     if(i===1)
     return anim;
     else
     {
         anim.push([this.head.key,this.head.key]);
         return anim;
     }
    }
}