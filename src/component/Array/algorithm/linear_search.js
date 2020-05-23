export  function linear_search(array)
{
const anim=[];
for(let i=0;i<array.length-1;i++)
{
    anim.push([i,i+1])
    anim.push([i+1,i])
}
anim.push([array.length-1,array.length-1])
return anim;
}
export function binary_search(array,elem)
{
    const anim=[];
    let start = 0;
    let end = array.length-1;
    let mid; 

    while(start<=end)
    {
        if( start === end){
			mid = start;
		}else{
			// end + start may overflow 
			mid = Math.floor( (end - start) / 2 ) + start; 
		}
    if(array[mid] === elem)
    {
      anim.push([mid,mid]);
      break;
    }else if(array[mid]>elem)
    {
        let prev = mid;
        end = mid-1;
        mid = Math.floor( (end - start) / 2 ) + start; 
        anim.push([prev,mid]);
        anim.push([mid,prev]);
    }else
    {
        let prev = mid;
        start = mid+1;
        mid = Math.floor( (end - start) / 2 ) + start; 
        anim.push([prev,mid]);
        anim.push([mid,prev]);
    }
}
return anim;
}
