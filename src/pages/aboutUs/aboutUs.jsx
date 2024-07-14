import React from "react";
import Navbar from "../../components/header/Navbar";
import Footer from "../../components/Footer/Footer";
import styled from "../aboutUs/AboutUs.module.css";
import pic1 from "../../assets/images/2.jpeg"

export default function AboutUs() {
  return (
    <div>
      <Navbar />
      <div className={styled.body}>
      <img src={pic1} alt=""/>
      <p>

        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam dolor
        assumenda officia repudiandae fugiat cupiditate, adipisci voluptatibus
        possimus suscipit quae tenetur ratione ipsa consectetur qui consequatur
        magni ex, tempora est porro dolorum eveniet aut blanditiis ab. Possimus
        recusandae quis placeat fugiat voluptatum maiores harum. Exercitationem
        quasi quo soluta recusandae corrupti itaque. Magnam quae et veniam
        exercitationem, eos natus molestiae nostrum ipsum dignissimos minima
        atque odit eligendi tempore incidunt ea vel repellendus dolore quas
        commodi nemo velit id impedit. Facere itaque aperiam harum, corporis aut
        illum tempore voluptatem vel natus dolorem necessitatibus provident ut
        tenetur repellat eveniet doloribus ad ducimus et possimus soluta
        aspernatur rem reprehenderit velit ex. Nostrum at error dolorem
        pariatur, laudantium quos debitis, praesentium temporibus quas est saepe
        quae labore odit tempore minima eius ducimus incidunt? Eveniet molestiae
        sapiente voluptates, deleniti voluptatem doloremque accusantium magni,
        tempore earum autem aperiam officia corrupti aliquid impedit facilis quo
        suscipit alias labore dolores magnam reiciendis, rerum doloribus quidem
        debitis? Consequatur quod pariatur, animi repudiandae iure adipisci
        obcaecati asperiores odit voluptate? Esse quas minus aut delectus
        nesciunt, cumque ullam eaque fugit dolore laudantium? Laudantium esse
        minus odit dolorem facilis, ad perferendis quasi eaque, nemo vitae sed
        illum, consequatur deleniti ea facere fuga pariatur!
      </p>
      </div>
      <Footer />
    </div>
  );
}
