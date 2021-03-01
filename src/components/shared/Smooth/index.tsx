import React, { useEffect, useRef } from "react";
import { useSmooth } from "../../utils/useSmooth";
import { SmoothWrapper } from "./styled";

interface Props {}

export const Smooth = (props: Props) => {
  const wrapper = useRef<HTMLDivElement>(null);
  const { smoothScroll } = useSmooth({ wrapper });

  useEffect(() => {
    smoothScroll();
  }, [smoothScroll]);

  return (
    <SmoothWrapper ref={wrapper}>
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
        Repudiandae, voluptates nisi soluta architecto inventore hic. Omnis eos
        expedita sed architecto illum mollitia! Totam aperiam vel consequuntur
        a, ipsum sapiente sit laborum exercitationem distinctio labore
        praesentium veniam accusamus, voluptate ratione suscipit!
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
    </SmoothWrapper>
  );
};
