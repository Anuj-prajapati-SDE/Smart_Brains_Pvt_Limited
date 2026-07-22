import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Auth() {

    const [isLogin, setIsLogin] = useState(true)
    const navigate = useNavigate()

    const [form, setForm] = useState({
        username: "",
        email: "",
        password: "",
        role: "user",
        adminSecretKey: ""
    })

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {

        e.preventDefault()

        try {

            const url = isLogin
                ?
                "http://localhost:3000/api/auth/login"
                :
                "http://localhost:3000/api/auth/register"

            const payload = isLogin
                ?
                {
                    email: form.email,
                    password: form.password
                }
                :
                form

            const res = await axios.post(
                url,
                payload,
                {
                    withCredentials: true
                }
            )

            alert(res.data.message)

            if (isLogin) {

                if (res.data.user.role === "admin") {

                    navigate("/admin-dashboard")

                } else {

                    navigate("/dashboard")

                }

            } else {

                navigate("/dashboard")

            }

        } catch (error) {

            alert(
                error.response?.data?.message
                ||
                "Something went wrong"
            )

        }

    }

    return (

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
shadow-2xl
border
border-white/20
"
            >

                <h1
                    className="
text-4xl
font-bold
text-center
text-white
mb-8
"
                >

                    {
                        isLogin
                            ?
                            "Welcome Back"
                            :
                            "Create Account"
                    }

                </h1>

                <form
                    onSubmit={handleSubmit}
                    className="
space-y-5
"
                >

                    {

                        !isLogin
                        &&

                        <>

                            <input
                                name="username"
                                placeholder="Username"
                                onChange={handleChange}
                                className="
w-full
p-4
rounded-xl
bg-white/10
text-white
outline-none
"
                            />

                            <select
                                name="role"
                                onChange={handleChange}
                                className="
w-full
p-4
rounded-xl
bg-black/40
text-white
"
                            >

                                <option value="user">
                                    User
                                </option>

                                <option value="admin">
                                    Admin
                                </option>

                            </select>

                            {

                                form.role === "admin"

                                &&

                                <input
                                    name="adminSecretKey"
                                    placeholder="Admin Secret"
                                    onChange={handleChange}
                                    autoComplete="off"
                                    className="
w-full
p-4
rounded-xl
bg-white/10
text-white
"
                                />

                            }

                        </>

                    }

                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        onChange={handleChange}
                        className="
w-full
p-4
rounded-xl
bg-white/10
text-white
"
                    />

                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        onChange={handleChange}
                        className="
w-full
p-4
rounded-xl
bg-white/10
text-white
"
                    />

                    <button
                        className="
w-full
bg-indigo-600
hover:bg-indigo-700
transition
rounded-xl
py-4
text-white
font-bold
"
                    >

                        {
                            isLogin
                                ?
                                "Login"
                                :
                                "Register"
                        }

                </button>

<div className="space-y-4">

<p
className="
text-center
text-white
text-sm
"
>

{
isLogin
?
"Don't have an account?"
:
"Already have an account?"
}

<button
type="button"
onClick={()=>
setIsLogin(
!isLogin
)
}
className="
ml-2
font-semibold
text-indigo-300
hover:text-indigo-200
transition
duration-300
"
>

{
isLogin
?
"Register"
:
"Login"
}

</button>

</p>

{
isLogin && (

<div
className="
flex
justify-center
"
>

<button
type="button"
onClick={()=>
navigate("/forgot-password")
}
className="
text-sm
text-white
hover:text-indigo-300
transition
duration-300
underline
"
>

Forgot Password?

</button>

</div>

)

}

</div>


                </form>

            </div>

        </div>

    )

}

export default Auth
