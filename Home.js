import './section.css';

function Home() {
  return (
   <section class="home">
      <div class="home-content">
         <h1>Hii.. This Is umesh</h1>
         <h3>Frontend Developer</h3>
         <p>Fresher || Fullstack Development Trainee || seeking entry level programming position || Ability to Work with Python </p>
         <div class="box">
            <a href="#">Hire me</a>
            <a href="#">lets Talk</a>
         </div>
      </div>
      <div class="fb">
         <a href="https://www.linkedin.com/in/umesh-gn-6836a6220/" target="_blank"><i class='bx bxl-linkedin-square'></i></a>
         <a href="#"><i class='bx bxl-facebook-square'></i></a>
      </div>

      <span class="img-hover"></span>
   </section>
  );
}

export default Home;