import Head from 'next/head';
import Image from 'next/image';


export default function Home() {

  const handleCheckForLink = () => {

    alert(`John Uchendu: Welcome, please click OK to continue scrolling 
  You: clicking OK button `)
  }
  return (

    <div>
      <Head>
        <title>John Uchendu CV</title>
        <meta name="description" content="John Portfolio website" />
        <link rel="" href="" />
        <link href="https://unpkg.com/ionicons@4.5.10-0/dist/css/ionicons.min.css" rel="stylesheet"></link>
      </Head>



      <div className="font-serif">

        <section className=' justify-center'>
          <div className='grid grid-rows-1 bg-blue-200 justify-center align-center px-3 py-28'>
            <div onClick={handleCheckForLink} className='rounded-lg shadow-md hover:shadow-xl transition ease-in delay-500 duration-500 cursor-pointer '>
              <div className='pb-10'><Image className='bg-blue-100 object-cover text-center' src='' alt={`John Uchendu's handsome smiling face`} height='100' width='100' /></div>
              <h1 className='text-center font-bold p-10 text-4xl md:text-7xl text-neutral-600 animate-pulse ring-offset-pink-700'>INTRODUCTION</h1>
              <p className=' text-center font-semibold text-neutral-500 p-7 '>Hello, my name is John Uchendu and welcome to my website. I am 25 years old.<br />
                I own a drivers license and an international passport.<br />
                John also could be funny. I am focused and love to learn.</p>
            </div>

          </div>

          <div className='grid grid-rows-1 bg-green-200 justify-center align-center px-3 py-28' >
            <div className='rounded-lg shadow-md hover:shadow-xl transition ease-in delay-500 duration-500'>
              <h1 className='text-center font-bold p-10 text-4xl md:text-7xl text-neutral-600 animate-pulse delay-700'>SKILLS AND LANGUAGE<br /> STACK</h1>
              <ol className='grid grid-rows-2 text-neutral-500 p-7' >
                <li><strong>FRONTEND</strong>: HTML, CSS, TAILWINDCSS, JAVASCRIPT, REACT.JS, NEXT.JS</li>
                <li><strong>BACKEND</strong>: NODE.JS, EXPRESS.JS</li>
                <li><strong>OTHER SKILLS</strong>: PROJECT MANAGEMENT -PRIMAVERA 6, AGILE DEVELOPMENTAL MINDSET</li>
              </ol>
              <h1 className='text-center font-bold p-10 text-4xl md:text-7xl text-neutral-600 animate-pulse delay-700'>CONNECT</h1>
              <div className='grid grid-cols-1'>
                <div className='justify-self-center pb-14 text-neutral-600' >
                  <a href='https://github.com/JohnUchendu' target='_blank' rel="noopener noreferrer"><i className="icon ion-logo-github text-5xl"></i></a>
                </div>
                {/* <div className='justify-self-start p-7 text-neutral-600'>
                  <i class="icon ion-logo-linkedin text-5xl"></i>
                </div> */}

              </div>
              <h1 className='text-center font-bold p-10 text-4xl md:text-7xl text-neutral-600 animate-pulse delay-700'>PROJECT</h1>
              <div className='grid grid-cols-1'>
                <div className='justify-self-center p-7 text-neutral-600'>
                  <iframe src='https://cecilia-learning-academy.herokuapp.com/' loading='lazy' name='Cecilia Learning Academy Website' height='300'  ></iframe>
                  <br /><a href='https://cecilia-learning-academy.herokuapp.com/' target='_blank' rel="noopener noreferrer"><button className=
                    'bg-green-400 text-white justify-self-center p-3 rounded hover:bg-green-700 transition duration-500  ease-in'>Visit site</button></a>
                </div>
              </div>
            </div>
          </div>

          <div className='grid grid-rows-1 bg-purple-200 justify-center align-center py-28'>
            <div className='rounded-lg shadow-md hover:shadow-xl transition ease-in delay-500 duration-500 cursor-pointer'>
              <h1 className='text-center font-bold p-10 text-4xl md:text-7xl text-neutral-600 animate-pulse'>EDUCATION & EXPERIENCE</h1>
              <div className='text-neutral-500 p-7' >

                <ul>
                  <li>University of Calabar 2019 - till end of period</li>
                  <li>Bowen University 2015 - 2019</li>
                  <li>Preston International School 2007 - 2013</li>
                  <li>Montessori International School 2002 - 2007</li>

                </ul>
                <ul><br />
                  <li>Designed and Developed a website for Cecilia Learning Academy</li>
                  <li></li>
                </ul>
              </div>
            </div>
          </div>

        </section>
      </div>


    </div>
  )
}
