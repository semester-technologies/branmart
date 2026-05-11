// src/components/marketing/blog/BlogPostBody.tsx

import Image from "next/image";
import Link from "next/link";

export default function BlogPostBody() {
  return (
    <article className="w-full px-4 pb-20 bg-white">
      <div className="max-w-2xl mx-auto flex flex-col gap-6 text-sm text-gray-600 leading-relaxed">

        {/* Intro paragraph */}
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper mattis
          lorem non. Ultrices praesent amet ipsum justo massa. Eu dolor aliquet risus gravida
          nunc at feugiat consequat purus. Non massa enim vitae duis mattis. Vel in ultrices
          vel fringilla.
        </p>

        <hr className="border-gray-100" />

        {/* Section: Introduction */}
        <h2 className="text-lg font-bold text-[#241717]">Introduction</h2>

        <p>
          Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi
          eleifend faucibus eget vestibulum felis. Dictum quis montes, sit sit. Tellus aliquam
          enim urna, etiam. Mauris posuere vulputate arcu amet, vitae nisi, tellus tincidunt.
          At feugiat sapien varius id.
        </p>

        <p>
          Eget quis mi enim, leo lacinia pharetra, semper. Eget in{" "}
          <Link href="#" className="underline text-[#241717] hover:text-[#cc3602]">
            volutpat mollis
          </Link>{" "}
          at volutpat lectus velit, sed auctor. Porttitor fames arcu quis fusce augue enim.
          Quis at habitant diam at. Suscipit{" "}
          <Link href="#" className="underline text-[#241717] hover:text-[#cc3602]">
            tristique risus
          </Link>
          , at donec. In turpis vel et quam imperdiet. Ipsum molestie aliquet sodales id est
          ac volutpat.
        </p>

        {/* Image with caption */}
        <figure className="flex flex-col gap-2">
          <div className="relative w-full h-72 rounded-2xl overflow-hidden bg-gray-100">
            <Image
              src="/images/blog/post-detail-1.png"
              alt="Office workspace"
              fill
              className="object-cover"
            />
          </div>
          <figcaption className="text-xs text-gray-400">
            Image courtesy of Laura Davidson via{" "}
            <Link href="https://unsplash.com" target="_blank" className="underline">
              Unsplash
            </Link>
          </figcaption>
        </figure>

        {/* Blockquote */}
        <blockquote className="border-l-4 border-[#cc3602] pl-5 flex flex-col gap-3">
          <p className="text-base italic text-[#241717] leading-relaxed">
            "In a world older and more complete than ours they move finished and complete,
            gifted with extensions of the senses we have lost or never attained, living by
            voices we shall never hear."
          </p>
          <cite className="text-sm text-gray-400 not-italic">
            — Olivia Rhye, Product Designer
          </cite>
        </blockquote>

        <p>
          Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum, nulla odio nisl vitae.
          In aliquet pellentesque aenean hac vestibulum turpis mi{" "}
          <Link href="#" className="underline text-[#241717] hover:text-[#cc3602]">
            bibendum diam
          </Link>
          . Tempor integer aliquam in vitae malesuada fringilla.
        </p>

        {/* Section: Software and tools */}
        <h2 className="text-lg font-bold text-[#241717]">Software and tools</h2>

        <p>
          Pharetra morbi libero id aliquam elit massa integer tellus. Quis felis aliquam
          ullamcorper porttitor. Pulvinar ullamcorper sit dictumst ut eget a, elementum eu.
          Maecenas est morbi mattis id in ac pellentesque ac.
        </p>

        {/* Section: Other resources */}
        <h2 className="text-lg font-bold text-[#241717]">Other resources</h2>

        <p>
          Sagittis et eu at elementum, quis in. Proin praesent volutpat egestas sociis sit
          lorem nunc nunc sit. Eget diam curabitur mi ac. Auctor rutrum lacus malesuada massa
          ornare et. Vulputate consectetur ac ultrices at diam dui eget fringilla tincidunt.
        </p>

        {/* Ordered list */}
        <ol className="list-decimal list-inside flex flex-col gap-2 pl-2">
          <li>
            Lectus id duis vitae porttitor enim{" "}
            <Link href="#" className="underline text-[#241717] hover:text-[#cc3602]">
              gravida morbi
            </Link>
            .
          </li>
          <li>
            Eu turpis{" "}
            <Link href="#" className="underline text-[#241717] hover:text-[#cc3602]">
              posuere semper feugiat
            </Link>{" "}
            volutpat elit, ultrices suspendisse. Auctor vel in vitae placerat.
          </li>
          <li>
            Suspendisse maecenas ac{" "}
            <Link href="#" className="underline text-[#241717] hover:text-[#cc3602]">
              donec scelerisque
            </Link>{" "}
            diam sed est duis purus.
          </li>
        </ol>

        {/* Image with caption */}
        <figure className="flex flex-col gap-2">
          <div className="relative w-full h-72 rounded-2xl overflow-hidden bg-gray-100">
            <Image
              src="/images/blog/post-detail-2.png"
              alt="Team collaboration"
              fill
              className="object-cover"
            />
          </div>
          <figcaption className="text-xs text-gray-400">
            Image courtesy of Leon via{" "}
            <Link href="https://unsplash.com" target="_blank" className="underline">
              Unsplash
            </Link>
          </figcaption>
        </figure>

        <p>
          Lectus leo massa amet posuere. Malesuada mattis non convallis quisque. Libero sit et
          imperdiet bibendum quisque dictum vestibulum in non. Pretium ultrices tempor non est
          diam. Enim ut enim amet amet integer cursus. Sit ac commodo pretium sed etiam turpis
          suspendisse at.
        </p>

        {/* Section: Conclusion */}
        <h2 className="text-lg font-bold text-[#241717]">Conclusion</h2>

        <p>
          Morbi sed imperdiet in ipsum, adipiscing elit dui lectus. Tellus id scelerisque est
          ultrices ultrices. Duis est sed leo nisl, blandit elit sagittis. Quisque tristique
          consequat quam sed. Nisl at scelerisque amet nulla purus habitasse.
        </p>

        <p>
          Nunc sed faucibus bibendum feugiat sed interdum. Ipsum sodales condimentum mi massa.
          In tincidunt pharetra consectetur sed duis facilisis metus. Etiam egestas in nec sed
          et. Quis lobortis at sit dictum eget nibh tortor commodo cursus.
        </p>

      </div>
    </article>
  );
}