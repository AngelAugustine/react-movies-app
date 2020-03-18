import React from 'react';

const Pagination =({postsPerPage,totalPosts,paginate})=>{
 
    const pageNumbers=[];
    for(let i=1;i<=Math.ceil(totalPosts/postsPerPage);i++)
    {
        pageNumbers.push(i);
    }

    return(
        <div style={{width: "50%", margin:" 10px auto"}}>
            <nav>
                <ul className="pagination" style={{padding: "0", margin:"auto",width: "50%"}}>
                    {
                        pageNumbers.map(number =>(
                            <li className="page-item" key={number}>
                                    <a onClick={()=>paginate(number)} href="!#" className="page-link" >{number}</a>
                            </li>
                        ))
                    }
                </ul>
            </nav>
        </div>
    )
}
export default Pagination;