import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

function ResetPassword(){

const navigate=useNavigate()

const [form,setForm]=useState({
email:"",
otp:"",
newPassword:""
})

const handleChange=(e)=>{

setForm({

...form,

[e.target.name]:
e.target.value

})

}

const reset=async()=>{

try{

await axios.post(

"http://localhost:3000/api/auth/reset-password",

form

)

alert(
"Password Updated"
)

navigate("/")

}catch(error){

alert(

error.response?.data?.message
||
"Something went wrong"

)

}

}

return(

<div
className="
min-h-screen
bg-gradient-to-br
from-indigo-900
via-black
to-purple-900
flex
justify-center
items-center
px-5
"
>

<div
className="
w-full
max-w-md
bg-white/10
backdrop-blur-xl
rounded-3xl
p-8
border
border-white/20
shadow-2xl
"
>

<h1
className="
text-3xl
text-white
font-bold
text-center
mb-3
"
>

Reset Password

</h1>

<p
className="
text-center
text-gray-300
mb-8
"
>

Enter Email, OTP and New Password

</p>

<div
className="
space-y-4
"
>

<input

name="email"

placeholder="Email"

onChange={handleChange}

className="
w-full
p-4
rounded-xl
bg-white/10
text-white
placeholder-gray-400
outline-none
"

 />

<input

name="otp"

placeholder="OTP"

onChange={handleChange}

className="
w-full
p-4
rounded-xl
bg-white/10
text-white
placeholder-gray-400
outline-none
"

 />

<input

type="password"

name="newPassword"

placeholder="New Password"

onChange={handleChange}

className="
w-full
p-4
rounded-xl
bg-white/10
text-white
placeholder-gray-400
outline-none
"

 />

<button

onClick={reset}

className="
w-full
bg-indigo-600
hover:bg-indigo-700
rounded-xl
py-4
text-white
font-semibold
transition
"

>

Reset Password

</button>

</div>

</div>

</div>

)

}

export default ResetPassword