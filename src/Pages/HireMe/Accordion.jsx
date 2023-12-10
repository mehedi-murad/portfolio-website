const Accordion = () => {
  return (
    <div className=" space-y-4">
        <h2 className="text-center text-3xl my-10 font-bold">Things that you should have needed!</h2>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2"/>
        <div className="collapse-title text-xl font-medium">
          Educational Qualifications
        </div>
        <div className="collapse-content">
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                <tr>
                    <th>Name of Degree</th>
                    <th>University</th>
                    <th>CGPA</th>
                    <th>Passing Year</th>
                </tr>
                </thead>
                <tbody>
                {/* row 1 */}
                <tr>
                    <td>Bachelor of Computer 
                        Science & Engineering (B. 
                        CSE)</td>
                    <td>Asian University of 
                        Bangladesh</td>
                    <td>3.63</td>
                    <td>2016</td>
                </tr>
                {/* row 2 */}
                <tr>
                    <td>Higher Secondary 
                        Certificate (H.S.C)</td>
                    <td>Dr. Muhammad Shahidullah 
                        College</td>
                    <td>4.40</td>
                    <td>2007</td>
                </tr>
                {/* row 3 */}
                <tr>
                    <td>Secondary School 
                        Certificate (S.S.C)
                        </td>
                    <td>Mirpur Bangla High School</td>
                    <td>4.81</td>
                    <td>2005</td>
                </tr>
                </tbody>
            </table>
        </div>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          Things That i've learnt so far!
        </div>
        <div className="collapse-content">
            ▪ JavaScript <br />
            ▪ React.Js <br />
            ▪ HTML5 <br />
            ▪ CSS3 <br />
            ▪ tailwindcss (CSS framework) <br />
            ▪ daisyUi (component library for tailwindcss) <br />
            ▪ MongoDb (for database) <br />
            ▪ Firebase
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          Competencies
        </div>
        <div className="collapse-content">
        ⮚ Self-motivated. <br />
        ⮚ Energetic. <br />
        ⮚ Capable of working under stress. <br />
        ⮚ Accept new ideas as well as work with a team. <br />
        ⮚ Capacity to lead a team and flexible to work. <br />
        ⮚ Excellent interpersonal communication skills. <br />
        ⮚ Quick Decision making ability.
        </div>
      </div>
    </div>
  );
};

export default Accordion;
