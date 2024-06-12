import Navbar from "../shared/Navbar";
import Banner0 from "../shared/Banner0";
import Sponsor from "../shared/Sponsor";
import News from "../shared/News";
import Copyright from "../shared/Copyright";
import AboutImage from "../images/home-image/about.jpeg";

const About = () => {
  return (
    <div>
      <Navbar />
      <Banner0 title="About" breadcrumbs={["Home", "About"]} />
    
      <div className="grid grid-cols-2 ml-12 gap-20">
        <div>
        <p className="text-4xl font-semibold mb-6">Who We Are</p>
        <p className="text-2xl text-justify ">
          When, while the lovely valley teems with vapour around me, and the
          meridian sun strikes the upper surface of the impenetrable foliage of
          my trees, and but a few stray. <br /> <br/>
          gleams steal into the inner sanctuary, I throw myself down among the
          tall grass by the trickling stream; and, as I lie close to the earth,
          a thousand unknown plants are noticed by me .when I hear the buzz of
          the little world among the stalks, and grow familiar with the
          countless indescribable forms of the insects and flies, then I feel
          the presence .

            <br/> <br/>

            When, while the lovely valley teems with vapour around me, and the
          meridian sun strikes the upper surface of the impenetrable foliage of
          my trees, and but a few stray. <br /> <br/>
          gleams steal into the inner sanctuary, I throw myself down among the
          tall grass by the trickling stream; and, as I lie close to the earth,
          a thousand unknown plants are noticed by me .when I hear the buzz of
          the little world among the stalks, and grow familiar with the
          countless indescribable forms of the insects and flies, then I feel
          the presence .

        </p>
        </div>
        <img className="rounded-4xl mr-" src={AboutImage} alt="About " />



      </div>
        <Sponsor />
        <News />
        <Copyright />
    </div>
  );
};

export default About;
