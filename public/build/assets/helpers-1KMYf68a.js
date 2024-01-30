const a=async(e,n="")=>{const o=await(await fetch(e)).blob(),s="png";return new File([o],n,{type:s})};export{a as u};
