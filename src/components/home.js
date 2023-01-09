const Home=()=>
{
    return(
        <>
        <div id="outer_div">
            <div id="inner_div">
                <p id="p3">
                    Health Care Services
                </p>
                <p id="p4">
                    We Care About Your Health
                </p>
            </div>
        </div>
        <div className="content">
        <h3>
            We are medical Center
        </h3>
        <br/>
        <h2>
            We Have Medicare Plan Options for You! 
        </h2>
        <br/>
        <p>
        SP hospital is a nonprofit multispecialty academic medical center that integrates clinical and hospital care with research and education. Ranked among the top hospitals in the world, we provide specialized medical care to millions of patients each year. Our integrated healthcare system includes hospitals, outpatient clinics and wellness centers across the globe with state-of-the-art facilities in the following locations:
        <br/>
        <br/>
        <li>United Kingdom (London)</li>
        <li>United Arab Emirates (Abu Dhabi)</li>
        <li>United States (Ohio, Florida and Nevada)</li>
        <li>Canada (Toronto)</li>
        <br/>
        SP hospital offers advanced technology, the latest treatments and is among the safest places in healthcare today. We put patients at the center of everything we do. Our internationally renowned medical experts work as a team to deliver comprehensive care across a broad range of specialties including cardiology and cardiac surgery, urology, cancer, neurology, digestive diseases and more. Whether you’re seeking a diagnosis, a second opinion, or beyond, our regional representative for India is here to help answer your questions and support you every step of the way. If you’re a healthcare professional, our local representative can also assist with training and education, collaboration opportunities and referrals.
        </p>
        <br/>

        </div>
        <hr/>
        <br/>
            <p id="p5"> Make an Appointment </p>
        <div>
            
            <table>
                <tbody>
                <tr>
                    <td>
                    <input id="input1" type="text" placeholder="First Name"/>
                    </td>
                    <td>
                    <input id="input1" type="text" placeholder="Second Name"/>
                    </td>
                </tr>
                <tr>
                    <td>
                    <input id="input1" type="email" placeholder="Email Id"/>
                    </td>
                    <td>
                    <input id="input1" type="tel" placeholder="Mobile"/>
                    </td>
                </tr>
                <tr>
                    <td>
                        <select id="input1">
                            <option value="sex">Sex</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Transgender">Transgender</option>
                        </select>
                    </td>
                    <td>
                        <input id="input1" type="date" placeholder="appointment"/>
                    </td>
                </tr>
                </tbody>              
            </table>
            <button type="submit" > Submit </button>   


        </div>
       
        </>
    )
}
export default Home;