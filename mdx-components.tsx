// import { Image, ImageProps } from '@nextui-org/react';
import type { MDXComponents } from 'mdx/types';
// import Image, { ImageProps } from "next/image";
interface HeadingProps {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  className: string;
  children: React.ReactNode;
}

const Heading: React.FC<HeadingProps> = ({ level, className, children }) => {
  const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements;
  const headingId = children?.toString() ?? '';

  return (
    <HeadingTag id={headingId} className={className}>
      {children}
    </HeadingTag>
  );
};

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // table: (props) => (
    //   <table className="border-collapse border-spacing-0 w-full" {...props} />
    // ),
    // thead: (props) => (
    //   <thead
    //     className="[&>tr]:h-12 [&>tr>th]:py-0 [&>tr>th]:align-middle [&>tr>th]:bg-default-400/20 dark:[&>tr>th]:bg-default-600/10 [&>tr>th]:text-default-600 [&>tr>th]:text-xs [&>tr>th]:text-left [&>tr>th]:pl-2 [&>tr>th:first-child]:rounded-l-lg [&>tr>th:last-child]:rounded-r-lg"
    //     {...props}
    //   />
    // ),
    // td: (props) => (
    //   <td
    //     className="text-sm p-2 max-w-[200px] overflow-auto whitespace-normal break-normal"
    //     {...props}
    //   />
    // ),
    // img: (props) => {
    //   const { src, alt, ...rest } = props as ImageProps;
    //   return <Image alt={alt} src={src} sizes="100vw" {...rest} />;
    // },
    h1: (props) => (
      <Heading
        level={1}
        className="mb-4 mt-6 text-4xl font-bold"
        {...(props as Omit<HeadingProps, 'level' | 'className'>)}
      />
    ),
    h2: (props) => (
      <Heading
        level={2}
        className="mb-4 mt-6 border-b border-divider pb-2 text-3xl font-semibold"
        {...(props as Omit<HeadingProps, 'level' | 'className'>)}
      />
    ),
    h3: (props) => (
      <Heading
        level={3}
        className="mb-4 mt-6 text-2xl font-semibold"
        {...(props as Omit<HeadingProps, 'level' | 'className'>)}
      />
    ),
    h4: (props) => (
      <Heading
        level={4}
        className="mb-4 mt-6 text-xl font-semibold"
        {...(props as Omit<HeadingProps, 'level' | 'className'>)}
      />
    ),
    h5: (props) => (
      <Heading
        level={5}
        className="mb-4 mt-6 text-lg font-semibold"
        {...(props as Omit<HeadingProps, 'level' | 'className'>)}
      />
    ),
    h6: (props) => (
      <Heading
        level={6}
        className="mb-4 mt-6 text-base font-semibold"
        {...(props as Omit<HeadingProps, 'level' | 'className'>)}
      />
    ),
    hr: (props) => <hr className="border-t border-gray-600" {...props} />,
    p: (props) => <p className="mb-4 mt-4" {...props} />,
    a: (props) => (
      <a
        className="link-underline"
        target="_blank"
        rel="noopener noreferrer nofollow"
        {...props}
      />
    ),
    ul: (props) => <ul className="mb-4 mt-0 list-disc pl-5" {...props} />,
    ol: (props) => <ol className="mb-4 mt-0 list-decimal pl-5" {...props} />,
    li: (props) => <li className="mb-2" {...props} />,
    code: (props) => (
      <code
        className="rounded bg-content1 px-[0.3rem] py-[0.2rem] font-mono shadow-medium"
        {...props}
      />
    ),
    pre: (props) => (
      <pre
        className="my-2 overflow-x-auto rounded bg-content1 p-4"
        {...props}
      />
    ),
    blockquote: (props) => (
      <blockquote
        className="my-4 border-l-4 border-gray-200 pl-4 italic text-gray-300"
        {...props}
      />
    ),
    img: (props) => (
      <img width="70%" className="border-main rounded border-4" {...props} />
    ),
    strong: (props) => <strong className="font-bold" {...props} />,
    table: (props) => (
      <div className="my-6 w-full overflow-x-auto">
        <table
          className="w-full rounded-lg bg-gray-800 text-gray-200 shadow-lg"
          {...props}
        />
      </div>
    ),
    tr: (props) => <tr className="border-t border-gray-500" {...props} />,
    th: (props) => (
      <th
        className="bg-gray-900 px-4 py-2 text-left font-bold text-white [&[align=center]]:text-center [&[align=right]]:text-right"
        {...props}
      />
    ),
    td: (props) => (
      <td
        className="px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right"
        {...props}
      />
    ),
    ...components,
  };
}
