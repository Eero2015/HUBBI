import React from 'react'

export default function Form() {
	const [formData, setFormData] = React.useState({
		firstName : '',
        lastName : '',
        email : '',
        comment : '',
        isFriendly : true,
        employment : '',
        favColor : ''
    });

	function handleChange(e) {
	
		const {name, value, type, checked} = e.target
		setFormData((prevData) => {
           return({...prevData,[name] : type === 'checkbox' ? 
           	                            checked : value})
		})
	}

	function handleSubmit(e) {
        e.preventDefault()
		console.log(formData);
		console.log(e);
		console.log('submitting...')
	}
	return ( 
		<form onSubmit={handleSubmit}>
			<input onChange={handleChange} type='text' 
			placeholder ='First Name' name='firstName' 
			value={formData.firstName}/>

			<input onChange={handleChange} type='text' 
			placeholder='Second Name' name='lastName'  
			value={formData.secondName}/>

			<input onChange={handleChange} type='email' 
			placeholder='myemail@example.com' name='email' 
			value={formData.email}/>

			<textarea onChange={handleChange} 
			placeholder='comments here' name='comment' 
			value={formData.comment} onChange={handleChange}/>
			<br/>

			<input type='checkbox' id='check' name='isFriendly' 
			checked={formData.isFriendly} onChange={handleChange}/>
			<label htmlFor='check'>Are you friendly?</label>
			<fieldset>
				<legend>Current employment status </legend>

				<input type='radio' id='Unemployed' name='employment' 
				value='Unemployed' 
				checked ={formData.employment === 'Unemployed'} 
				onChange={handleChange}/>
				<label htmlFor='Unemployed'>Unemployed</label>
				<br />

				<input type='radio' id='partTime' name='employment' 
				value='Part-time' 
				checked={formData.employment === 'Part-time'} 
				onChange={handleChange}/>
				<label htmlFor='partTime'>Part time</label>
				<br />

				<input type='radio' id='fullTime' name='employment' 
				value='Full-time' 
				checked={formData.employment === 'Full-time'} 
				onChange={handleChange}/>
				<label htmlFor='fullTime'>Full time</label>
			</fieldset>

			<label htmlFor='favColor'>What is your favorite color ?</label>
			<br/>
			
			<select
			style={{display:'flex', alignItems: 'center', width: '100px'}} 
			id='favColor' value={formData.favColor} 
			onChange={handleChange} name='favColor'>
			    <option value=''>--choose--</option>
			    <option value='red'>Red</option>
			    <option value='orange'>Orange</option>
			    <option value='yellow'>Yellow</option>
			    <option value='green'>Green</option>
			    <option value='blue'>Blue</option>
			    <option value='indigo'>Indigo</option>
			    <option value='violet'>Violet</option>
			</select>
			<br/>
			<br/>
			<button>Submit</button>

		</form>
		)
}  