import React,{useState,useEffect} from 'react'
import axios from 'axios'

const PostdataApi = () => {
   
    const [data,setData] = useState([])

    const [name,setName] =useState('')
    const [email,setEmail] = useState('')
     
    useEffect(()=>{
        axios.get('https://61bb1459e943920017784c3c.mockapi.io/crud')
        .then(res=>{
            console.log('Getting data',res.data)
            setData(res.data)
        }).catch(err=>console.log(err))
    },[])

    const postData =(e)=>{
     e.preventDefault()
     axios.post('https://61bb1459e943920017784c3c.mockapi.io/crud',
     {name,email})

     .then(res=> console.log('psting data', res))
     .catch(err=>console.log(err))
    }

    const array = data.map((elem,index)=>{
        return(
            <tr>
                <td style={{border: '1px solid black'}}>{elem.id} </td>
                <td style={{border: '1px solid black'}}>{elem.name}</td>
                <td style={{border: '1px solid black'}}>{elem.email}</td>
            </tr>
        )

    })
     return(
         <div><h1>Post user data hrough api</h1>
         <div>
             <label>Name</label>
             <input type='text' value={name} 
             onChange={e=>setName(e.target.value)}/>
             <br/><br/>
             <label>Email</label>
             <input type='text' value={email} 
             onChange={e=>setEmail(e.target.value)}/>
             <br/><br/>
             <button onClick={postData}>Post</button>    
        </div>
        <table style={{border: '1px solid black'}}>
                 <tr>
                    <th style={{border: '1px solid black'}}>Id</th>
                    <th style={{border: '1px solid black'}}>Name</th>
                    <th style={{border: '1px solid black'}}>Email</th>
                </tr>
                {array}
            </table>
         </div>
     )


    // const [data,setData]= useState([])

    // const [title,setTitle] =useState('')
    // const [body,setBody] =useState('')

    // useEffect(()=>{
    //     axios.get('https://jsonplaceholder.typicode.com/posts')
    //     .then(res =>{
    //         console.log('getting data',res.data);
    //         setData(res.data)
    //     })
    //     .catch(err=> console.log(err))
    // },[])

    // const postData = (e)=>{
    //  e.preventDefault()
    //  axios.post('https://jsonplaceholder.typicode.com/posts',{
    //      title,
    //      body
    //  }).then(res =>console.log('posting data', res))
    //  .catch(err=> console.log(err))
    // }

    // const array = data.map((elem,index)=>{
    //     return(
    //         <tr>
    //             <td style={{border: '1px solid black'}}>{elem.id} </td>
    //             <td style={{border: '1px solid black'}}>{elem.title}</td>
    //             <td style={{border: '1px solid black'}}>{elem.body}</td>
    //         </tr>
    //     )
    // })
    // return (
    //     <div>
    //         <h1>Let post data through api</h1>
    //         <div>
    //             <label>Title</label>
    //             <input type='text' value={title} 
    //             onChange={(e)=>{setTitle(e.target.value)}}/>
    //             <br/><br/>

    //             <label>Body</label>
    //             <input type='text' value={body} 
    //             onChange={(e)=>{setBody(e.target.value)}}/>
    //             <br/> <br/>
    //             <button onClick={postData} >POST</button> 
    //             <br/> <br/>
    //         </div>
    //         <table style={{border: '1px solid black'}}>
    //             <tr>
    //                 <th style={{border: '1px solid black'}}>Id</th>
    //                 <th style={{border: '1px solid black'}}>Title</th>
    //                 <th style={{border: '1px solid black'}}>Body</th>
    //             </tr>
    //             {array}
    //         </table>
    //     </div>
    // )
}

export default PostdataApi
