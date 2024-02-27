
import { promises as fs } from 'fs';
import React from 'react';

export default async function Page() {
  const file = await fs.readFile(process.cwd() + '/info.json', 'utf8');
  const data = JSON.parse(file);
  const information = data.data.information
  const experience = data.data.experience.jobs
  const projects = data.data.experience.projects
  const media = data.data.media
  const socialmedia = data.data.socialmedia
  const education = data.data.education
  return (
    <div className='max-w-md mx-auto md:max-w-5xl mt-5 mb-5 font-mono md:text-md'>
        {/* MENU */}

        {/* ----------------------------- INFORMATION -------------------------------*/}
        <div className="rounded-xl shadow-md overflow-hidden p-10 bg-gray-900 mb-2 md:flex justify-center">
          <div className='md:mr-6'>
            <img className="object-cover rounded-xl" src={media.profilepic} alt='Profile Picture' />
            <div className=' justify-center mt-10 hidden md:flex'>
              <a href={socialmedia.linkedin} target='_blank'><img src={media.linkedin}/></a>
              <a href={socialmedia.github} target='_blank'><img src={media.github}/></a>
              <a href={media.resume} target='_blank' className='rounded-md border ml-1 p-1.5  hover:bg-black hover:border-black'>RESUME </a>
            </div>
          </div>
          <div>
            <strong className='text-3xl'>{information.name + ' ' +information.lastname}</strong>
            <p className='mt-5'>{information.about}</p>
            <h1 className='underline mt-5'>Contact:</h1>
            <p className='pl-4' >Email: {information.email}</p>
            <p className='pl-4'>Phone: {information.phone}</p>
            <h1 className='mt-5 underline'>Location:</h1>
            <p className='pl-4'>{information.city}, {information.state}, {information.country}</p>
            <div className='flex justify-center mt-2 md:hidden'>
              <a href={socialmedia.linkedin} target='_blank'><img src={media.linkedin}/></a>
              <a href={socialmedia.github} target='_blank'><img src={media.github}/></a>
              <a href={media.resume} target='_blank' className='rounded-md border ml-1 p-1.5  hover:bg-black hover:border-black'>RESUME </a>
            </div>
          </div>
          
        </div>

        {/*------------------------------- EXPERIENCE --------------------------------*/}
        <div className="rounded-xl shadow-md overflow-hidden p-10 bg-gray-900 justify-center mb-2">
            <h1 className='text-2xl'>EXPERIENCE:</h1>
            {
              experience.map((item, index) => (
                <div key={index} className='rounded-xl p-5'>
                  <h3 className='underline'>{item.company} - {item.position} ({item.startDate} - {item.endDate})</h3>
                  <ul className='list-disc list-inside md:ml-10 ml-4'>
                      {item.activities.map((activity, activityIndex)=>(
                          <li key={activityIndex}>{activity}</li>
                      ))}
                  </ul>
                </div>
              ))
            }
        </div>
        {/*------------------------------- PROJECTS --------------------------------*/}
        <div className="rounded-xl shadow-md overflow-hidden p-10 bg-gray-900 justify-center mb-2">
            <h1 className='text-2xl'>PROJECTS:</h1>
            <div className='md:grid md:grid-cols-3 justify-center'>
              {
                projects.map((item, index) => (
                  <div key={index} className='border m-1 rounded-xl p-5 hover:bg-black hover:border-black'>
                    <h3 className='underline'>{item.name}</h3>
                    <img className='rounded-xl' src={item.img} alt={item.name}/>
                    {/* <ul className='list-disc list-inside md:ml-10 ml-4'>
                        {item.activities.map((activity, activityIndex)=>(
                            <li key={activityIndex}>{activity}</li>
                        ))}
                    </ul> */}
                  </div>
                ))
              }
            </div>
        </div>
        {/* EDUCATION */}
        
        <div className="rounded-xl shadow-md overflow-hidden p-10 bg-gray-900 justify-center mb-2">
          <h1 className='text-2xl'>EDUCATION:</h1>
          {
              education.map((item, index) => (
                <div key={index} className='p-5'>
                  <strong className='underline'>{item.institution} - ({item.startYear} - {item.endYear})</strong> 
                  <p className='ml-4'>{item.degree}</p>
                  <p className='ml-4'>{item.specialization}</p>
                </div>
              ))
            }
        </div>

        {/* SKILLS && SOFTSKILLS */}
        <div className="rounded-xl shadow-md overflow-hidden p-10 bg-gray-900 justify-center">
          <h1 className=' text-2xl mb-1'>SKILLS:</h1>
          <p className='mb-4 pl-4 '>{information.skills.map((item, index)=>(<span className='border rounded-md  mr-2 p-0.5 hover:bg-black hover:border-black' key={index}> {item} </span>))}</p>
          <h1 className=' text-2xl mb-1'>SOFT SKILLS:</h1>
          <p className='mb-4 pl-4'>{information.softskills.map((item, index)=>(<span className='border rounded-md mr-2 p-0.5 hover:bg-black  hover:border-black' key={index}> {item} </span>))}</p>
        </div>
    </div>
  );
}