import React from 'react'

export default function Form() {
	let style=document.body.style;
    style.backgroundColor="purple";
    style.padding = "20px 10px";
    style.display="flex";
    style.alignItems='center';

    const[formData,setFormData] = React.useState(
    	{
    		email : '',
    		newPassword : '',
    		confirmPassword : '',
    		joinSettler : false,
    	}
    	)
    	
    
    function handleChange (e) {
    	const {name,value,type,checked} = e.target;
    	setFormData(prevData => (
    
    			{...prevData, [name] : type === 'checkbox' ? 
    			                        checked : value}
    			)
    	)
    }


	function handleSubmit(e) {
		e.preventDefault()
		if(formData.newPassword === formData.confirmPassword) {
           console.log('successfully signed up')
           if(formData.joinSettler) console.log('thanks for signing up for our newsletter!')
		} else{console.log('password do not match')}
		 
		 
		  
	
	}
	return(
		<div 
		style={{width: "60%", 
		        height: '70%', 
		        backgroundColor : "whitesmoke" ,
	            borderRadius : "10px", 
	            display : 'flex',
	            alignItems : 'center',
	            padding : "10px",
	            }}
		>
			<form 
			    style={{ width: '100%',
			               display : 'flex',
			               flexDirection: 'column', 
			               gap : '10px'}} 
			    onSubmit={handleSubmit}>

				<input 
				type='email' 
				placeholder='email:myemail@domain.com'
				name='email'
				onChange={handleChange}
				value ={formData.email} 
				/>
                
				<input 
				type='password' 
				placeholder='new password'
				name='newPassword'
				onChange={handleChange}
				value={formData.newPassword}
				/>

				<input 
				type='password' 
				placeholder='confirm password'
				name='confirmPassword'
				onChange={handleChange}
				value={formData.confirmPassword}
				/> 
			

				<input 
				id='joinsettler'
				type='checkbox'
				name='joinSettler'
				checked ={formData.joinSettler}
				onChange={handleChange}
			    />

			    <label htmlFor='joinsettler'>Do you want to join news settler?</label>
          

                <button>SIGN UP</button>
			</form>
		</div>
		)
}