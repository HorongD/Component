import React, { useEffect } from "react";
import { SmoothWrapper } from "./styled";

interface Props {}

export const Smooth = (props: Props) => {
  useEffect(() => {
    const speed = 0.04;
    let height = 0;
    let offset = 0;

    // const body = document.body;
    const root: HTMLElement | null = document.querySelector("#root");
    const scrollWrap: HTMLElement | null = document.querySelector(
      "[data-smooth='true']"
    );
    if (scrollWrap) {
      height = scrollWrap.getBoundingClientRect().height - 1;
    }

    if (root) {
      root.style.height = Math.floor(height) + "px";
    }
    // body.style.height = Math.floor(height) + "px";

    function smoothScroll() {
      offset += (window.pageYOffset - offset) * speed;

      var scroll = "translateY(-" + offset + "px) translateZ(0)";
      if (scrollWrap) {
        scrollWrap.style.transform = scroll;
      }

      requestAnimationFrame(smoothScroll);
    }

    smoothScroll();
  }, []);

  return (
    <SmoothWrapper data-smooth="true">
      <div className="content">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem animi
          ipsam itaque doloribus aliquid, veniam minus laborum doloremque quos
          ullam. Quas harum iure optio dolorem ea recusandae blanditiis ipsum
          praesentium.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem animi
          ipsam itaque doloribus aliquid, veniam minus laborum doloremque quos
          ullam. Quas harum iure optio dolorem ea recusandae blanditiis ipsum
          praesentium.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem animi
          ipsam itaque doloribus aliquid, veniam minus laborum doloremque quos
          ullam. Quas harum iure optio dolorem ea recusandae blanditiis ipsum
          praesentium.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem animi
          ipsam itaque doloribus aliquid, veniam minus laborum doloremque quos
          ullam. Quas harum iure optio dolorem ea recusandae blanditiis ipsum
          praesentium.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem animi
          ipsam itaque doloribus aliquid, veniam minus laborum doloremque quos
          ullam. Quas harum iure optio dolorem ea recusandae blanditiis ipsum
          praesentium.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem animi
          ipsam itaque doloribus aliquid, veniam minus laborum doloremque quos
          ullam. Quas harum iure optio dolorem ea recusandae blanditiis ipsum
          praesentium.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem animi
          ipsam itaque doloribus aliquid, veniam minus laborum doloremque quos
          ullam. Quas harum iure optio dolorem ea recusandae blanditiis ipsum
          praesentium.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem animi
          ipsam itaque doloribus aliquid, veniam minus laborum doloremque quos
          ullam. Quas harum iure optio dolorem ea recusandae blanditiis ipsum
          praesentium.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
          excepturi tenetur sapiente dolor deleniti. Fuga labore pariatur esse.
          Repudiandae, voluptates nisi soluta architecto inventore hic. Omnis
          eos expedita sed architecto illum mollitia! Totam aperiam vel
          consequuntur a, ipsum sapiente sit laborum exercitationem distinctio
          labore praesentium veniam accusamus, voluptate ratione suscipit!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ea nihil
          quibusdam repudiandae praesentium quisquam eos, repellendus fugiat
          dolore! Neque.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem animi
          ipsam itaque doloribus aliquid, veniam minus laborum doloremque quos
          ullam. Quas harum iure optio dolorem ea recusandae blanditiis ipsum
          praesentium.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem animi
          ipsam itaque doloribus aliquid, veniam minus laborum doloremque quos
          ullam. Quas harum iure optio dolorem ea recusandae blanditiis ipsum
          praesentium.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem animi
          ipsam itaque doloribus aliquid, veniam minus laborum doloremque quos
          ullam. Quas harum iure optio dolorem ea recusandae blanditiis ipsum
          praesentium.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem animi
          ipsam itaque doloribus aliquid, veniam minus laborum doloremque quos
          ullam. Quas harum iure optio dolorem ea recusandae blanditiis ipsum
          praesentium.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem animi
          ipsam itaque doloribus aliquid, veniam minus laborum doloremque quos
          ullam. Quas harum iure optio dolorem ea recusandae blanditiis ipsum
          praesentium.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem animi
          ipsam itaque doloribus aliquid, veniam minus laborum doloremque quos
          ullam. Quas harum iure optio dolorem ea recusandae blanditiis ipsum
          praesentium.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem animi
          ipsam itaque doloribus aliquid, veniam minus laborum doloremque quos
          ullam. Quas harum iure optio dolorem ea recusandae blanditiis ipsum
          praesentium.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem animi
          ipsam itaque doloribus aliquid, veniam minus laborum doloremque quos
          ullam. Quas harum iure optio dolorem ea recusandae blanditiis ipsum
          praesentium.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem animi
          ipsam itaque doloribus aliquid, veniam minus laborum doloremque quos
          ullam. Quas harum iure optio dolorem ea recusandae blanditiis ipsum
          praesentium.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem animi
          ipsam itaque doloribus aliquid, veniam minus laborum doloremque quos
          ullam. Quas harum iure optio dolorem ea recusandae blanditiis ipsum
          praesentium.
        </p>
      </div>
    </SmoothWrapper>
  );
};
