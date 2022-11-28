import React from 'react';
import { useTitle } from '../../CustomHook/useTitle';

const Blog = () => {
    useTitle('Blog -')
    return (
        
        <div className='grid justify-items-center mt-5 bg-base-200'>
                <h1 className='text-4xl mt-4 font-semibold'>B L O G</h1>
            <div className="card bg-gray-900 md:w-10/12 text-neutral-content my-5">
            <div className="card-body items-center">
                <h2 className="card-title text-2xl ">1. What are the different ways to manage a state in a React application?</h2>
                <p><span className='font-semibold'>Answer:</span> There are four main types of state you need to properly manage in your React apps:</p>
                <ol className='flex'>
                    <li className='mx-3'> 1. Local state</li>
                    <li className='mx-3'> 2. Global state</li>
                    <li className='mx-3'>3. Server state</li>
                    <li className='mx-3'>4. URL state</li>
                </ol>
            </div>
            </div>


            <div className="card bg-gray-900 md:w-10/12 text-neutral-content my-5">
            <div className="card-body items-center">
                <h2 className="card-title text-2xl">2. How does prototypical inheritance work? </h2>
                <p><span className='font-semibold'>Answer:</span> When it comes to inheritance, JavaScript only has one construct: objects. Each object has a private property which holds a link to another object called its prototype. That prototype object has a prototype of its own, and so on until an object is reached with null as its prototype. By definition, null has no prototype, and acts as the final link in this prototype chain. It is possible to mutate any member of the prototype chain or even swap out the prototype at runtime, so concepts like static dispatching do not exist in JavaScript. <br />
                <br />
                While this confusion is often considered to be one of JavaScript's weaknesses, the prototypical inheritance model itself is, in fact, more powerful than the classic model. It is, for example, fairly trivial to build a classic model on top of a prototypical model — which is how classes are implemented.</p>
            </div>
            </div>


            <div className="card bg-gray-900 md:w-10/12 text-neutral-content my-5">
            <div className="card-body items-center">
                <h2 className="card-title text-2xl">3. What is a unit test? Why should we write unit tests? </h2>
                <p><span className='font-semibold'>Answer:</span> Unit Testing is a testing method that tests an individual unit of software in isolation. Unit testing for React Apps means testing an individual React Component.
                <br />
                <br />
                Unit Testing is important for React Apps, as it helps in testing the individual functionality of React components. Moreover, any error in code can be identified at the beginning itself, saving time to rectify it at later stages. Some of the core benefits of Unit Testing are:</p>
                <ul>
                    <li className='my-3'>
                        <p>
                        <span className='font-semibold'>Process Becomes Agile:</span> Agile Testing process is the main advantage of unit testing. When you add more features to the software, it might affect the older designs and you might need to make changes to the old design and code later. This can be expensive and require extra effort. But if you do unit testing, the whole process becomes much faster and easier.
                        </p>
                    </li>
                    <li className='my-3'>
                        <p>
                        <span className='font-semibold'>Quality of code:</span> Unit testing significantly improves the quality of the code. It helps developers to identify the smallest defects that can be present in the units before they go for the integration testing.
                        </p>
                    </li>
                    <li className='my-3'>
                        <p>
                        <span className='font-semibold'>Facilitates change: </span> Refactoring the code or updating the system library becomes much easier when you test each component of the app individually.
                        </p>
                    </li>
                    <li className='my-3'>
                        <p>
                        <span className='font-semibold'>Smooth Debugging: </span> The debugging process is very simplified by doing unit testing. If a certain test fails, then only the latest changes that have been made to the code need to be debugged.
                        </p>
                    </li>
                    <li className='my-3'>
                        <p>
                        <span className='font-semibold'>Reduction in cost: </span>  When bugs are detected at an early stage, through unit testing, they can be fixed at almost no cost as compared to a later stage, let’s say during production, which can be really expensive.
                        </p>
                    </li>
                </ul>
            </div>
            </div>


            <div className="card bg-gray-900 md:w-10/12 text-neutral-content my-5">
            <div className="card-body items-center">
                <h2 className="card-title text-2xl">4. React vs. Angular vs. Vue? </h2>
                <p><span className='font-semibold'>Answer: </span>
                 Choosing the proper JS framework requires a thorough and thorough discovery of what type of applications you are interested in creating, then deciding which framework is best suited for the qualities of your future app projects.
                <br />
                <br />
                ➡ If you are looking for an easy-to-learn framework above all else, Vue and React would be the right call, with the former taking the lead.
                <br />
                ➡ On the other hand, Angular and Vue are the frameworks you would want to work with for those attracted to Single Page Applications (SPA) or looking for more accessible Document Object Model (DOM) manipulation.
                <br />
                ➡ While complex or monolithic applications fall into Angular’s specialty, Vue and React are great at designing interactive User Interfaces (UI).
                <br />
                <br />
                However, many critical factors such as popularity and job listings point to React. </p>
            </div>
            </div>
        </div>

    );
};

export default Blog;