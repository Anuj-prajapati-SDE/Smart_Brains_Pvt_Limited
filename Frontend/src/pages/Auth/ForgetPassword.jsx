import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

function ForgotPassword(){

const [email,setEmail]=useState("")
const [loading,setLoading]=useState(false)

const navigate=useNavigate()

const send=async()=>{

try{

setLoading(true)

await axios.post(
"http://localhost:3000/api/auth/forgot-password",
{
email
}
)

alert(
"OTP Sent Successfully"
)

navigate(
"/reset-password"
)

}catch(error){

alert(
error.response?.data?.message
||
"Something went wrong"
)

}
finally{

setLoading(false)

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
border
border-white/20
rounded-3xl
shadow-2xl
p-8
"
>

<h1
className="
text-3xl
font-bold
text-center
text-white
mb-2
"
>

Forgot Password

</h1>

<p
className="
text-gray-300
text-center
mb-8
"
>

Enter email to receive OTP

</p>

<input

type="email"

placeholder="Enter Email"

value={email}

onChange={
(e)=>
setEmail(
e.target.value
)
}

className="
w-full
p-4
rounded-xl
bg-white/10
text-white
placeholder-gray-400
border
border-white/20
mb-6
outline-none
"

/>

<button

onClick={send}

disabled={loading}

className="

w-full
py-4
rounded-xl
font-semibold
text-white

transition

${
loading
?
'bg-gray-600 cursor-not-allowed'
:
'bg-indigo-600 hover:bg-indigo-700'
}

"

>

{

loading

?

<div
className="
flex
justify-center
items-center
gap-3
"
>

<div
className="
w-5
h-5
border-2
border-white
border-t-transparent
rounded-full
animate-spin
"
/>

Sending OTP...

</div>

:

"Send OTP"

}

</button>

</div>

</div>

)

}

export default ForgotPassword