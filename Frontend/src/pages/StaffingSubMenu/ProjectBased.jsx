import React from 'react'
import { Link } from 'react-router-dom'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import { motion } from "framer-motion";

import {FolderKanban,Clock3,Rocket,ArrowRight} from "lucide-react";

export function ProjectStaff (){
  return(
    <>
    {/* PROJECT BASED STAFFING */}

<section className="bg-white py-24 overflow-hidden">

<div className="max-w-[1280px] mx-auto px-gutter">

<div className="text-center">

<span className="
inline-block
px-4
py-1
rounded-full
bg-primary/10
text-primary
font-bold
uppercase
tracking-widest
text-xs
mb-5
">

Project Based Staffing

</span>

<h2 className="
text-4xl
md:text-5xl
font-black
text-primary
leading-tight
">

Build Teams
For Specific Projects

</h2>

<p className="
mt-5
max-w-xl
mx-auto
text-slate-500
leading-relaxed
">

Access specialized talent for
defined timelines and business goals.

</p>

</div>



<div className="
grid
lg:grid-cols-[1fr_.85fr]
gap-12
items-center
mt-20
">



{/* LEFT */}

<div className="space-y-5">

{[
{
icon:<FolderKanban size={22}/>,
title:"Project Focused"
},

{
icon:<Clock3 size={22}/>,
title:"Time Efficient"
},

{
icon:<Rocket size={22}/>,
title:"Fast Delivery"
}

].map((item,index)=>(

<motion.div

key={index}

initial={{
opacity:0,
y:20
}}

whileInView={{
opacity:1,
y:0
}}

transition={{
delay:index*0.12
}}

viewport={{
once:true
}}

whileHover={{
x:6
}}

className="
flex
items-center
gap-5
bg-[#f8fbff]
rounded-[28px]
px-8
py-7
"

>

<div className="
w-14
h-14
rounded-2xl
bg-primary
text-white
flex
items-center
justify-center
shrink-0
">

{item.icon}

</div>

<h3 className="
text-xl
font-bold
text-primary
">

{item.title}

</h3>

</motion.div>

))}

</div>



{/* SMALL IMAGE */}

<motion.div

initial={{
opacity:0,
x:30
}}

whileInView={{
opacity:1,
x:0
}}

transition={{
duration:0.7
}}

viewport={{
once:true
}}

className="
relative
max-w-[450px]
mx-auto
"

>

<img
src="https://images.unsplash.com/photo-1552664730-d307ca884978"
alt="Project Based Staffing"
className="
rounded-[34px]
w-full
h-[320px]
object-cover
"
/>

<div className="
absolute
bottom-5
left-5
bg-white
rounded-2xl
shadow-lg
px-5
py-4
">

<div className="
text-primary
font-black
">

Project Ready

</div>

</div>

</motion.div>

</div>

</div>

</section>




{/* DIFFERENT SECTION */}

<section className="bg-[#f8fbff] py-20">

<div className="max-w-[900px] mx-auto px-gutter">

<div className="text-center">

<h2 className="
text-3xl
font-black
text-primary
">

Delivery Models

</h2>

<p className="
mt-4
text-slate-500
">

Choose the engagement that fits.

</p>

</div>



<div className="
flex
flex-wrap
justify-center
gap-4
mt-10
">

{[
"Fixed Duration",
"Dedicated Team",
"Milestone Based",
"Flexible Scaling"
].map((item)=>(

<div
key={item}
className="
px-7
py-4
rounded-full
bg-white
border
border-primary/10
text-primary
font-semibold
hover:bg-primary
hover:text-white
duration-300
"
>

{item}

</div>

))}

</div>

</div>

</section>




{/* CTA */}

    </>
  )
}

const ProjectBased = () => {
  const animRef = useScrollAnimation()

  return (
    <main className="mt-20 min-h-screen bg-slate-50 dark:bg-[#0c0e0f] text-on-surface" ref={animRef}>
        <section className="relative h-[480px] flex items-center bg-primary text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover opacity-20"
            src="https://visiontechtechnology.com/assets/images/services/contract-Staffing.jpg"
            alt="Contract Staffing"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-transparent" />
        </div>

      <div className="max-w-[1280px] mx-auto px-gutter relative z-10 w-full">
          <div className="max-w-2xl">
            <span data-animate="fade-up" className="inline-block bg-white/10 border border-white/20 text-[#a9c7ff] px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-4">
              TARGETED DELIVERY
            </span>
            <h1 data-animate="fade-up" data-animate-delay="0.1" className="font-headline-xl text-3xl sm:text-5xl font-black mb-4 tracking-tight leading-none uppercase">
              PROJECT-BASED STAFFING
            </h1>
            <p data-animate="fade-up" data-animate-delay="0.2" className="text-sm sm:text-base text-slate-300 font-light mb-6 leading-relaxed">
              A specialized hiring solution designed to rapidly deploy entire dedicated teams or individual experts to execute specific corporate initiatives, ensure product launches, and meet critical project deadlines.
            </p>
            <div data-animate="fade-up" data-animate-delay="0.3">
              <Link to="/contact-us" className="inline-block px-5 py-3 bg-white text-primary hover:bg-slate-100 hover:scale-[1.02] active:scale-[0.98] transition-all font-bold rounded-xl text-xs uppercase tracking-wider shadow-md">
                Contact us button
              </Link>
            </div>
          </div>
        </div>
        </section>

        {/* PROJECT ENGINE */}

<ProjectStaff/>


{/* FINAL CTA */}

<section className="py-28">

<div className="max-w-[1200px] mx-auto px-gutter">

<div
className="
relative
rounded-[50px]
overflow-hidden
"
>

<img
src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a"
className="
absolute
inset-0
w-full
h-full
object-cover
"
/>

<div
className="
relative
bg-black/60
text-white
text-center
p-24
"
>

<h2 className="text-6xl font-black">
Launch Your Next Project Faster
</h2>

<p className="mt-8 max-w-2xl mx-auto opacity-80">
Get dedicated professionals and
delivery support aligned to your
project timeline.
</p>

<Link
to="/contact-us"
className="
mt-10
inline-flex
px-8
py-4
rounded-xl
bg-white
text-primary
font-black
"
>
Get Started
</Link>

</div>

</div>

</div>

</section>

    </main>
  )
}

export default ProjectBased