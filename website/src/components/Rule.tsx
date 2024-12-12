import { useState } from 'react';
import AnimateHeight from 'react-animate-height';
import CodeBlock from '@theme/CodeBlock';

type RuleProps = {
  children: string;
  href: string;
  prefix?: string;
};

export const Rule = ({ children, href, prefix }: RuleProps) => {
  const [descriptionHeight, setDescriptionHeight] = useState<'auto' | 0>(0);

  return (
    <div>
      {prefix}{' '}
      <span>
        <div
          className="mb-1 inline-flex cursor-pointer items-center rounded-md bg-gray-100 px-1.5 py-1 text-xs font-medium text-neutral-600 hover:bg-gray-200 dark:bg-blue-600 dark:bg-opacity-40 dark:text-neutral-200 dark:hover:bg-blue-700 dark:hover:bg-opacity-40"
          onClick={() => setDescriptionHeight((prev) => (prev === 0 ? 'auto' : 0))}
        >
          <div className="mr-1">📏 Rule</div>
        </div>
        <AnimateHeight duration={500} easing="ease" height={descriptionHeight}>
          <div className="rounded-md border-0 border-l-[5px] border-solid border-neutral-500 bg-gray-200 p-2 text-xs italic text-neutral-600 dark:border-gray-200 dark:bg-neutral-600 dark:text-gray-200 [&_p]:mb-0">
            <a className="text-sm" href={href} rel="noopener noreferrer" target="_blank">
              Rule
            </a>
            <CodeBlock className="!mb-0 mt-1 text-sm" language="ts" title="eslint.config.mjs">
              {children}
            </CodeBlock>
          </div>
        </AnimateHeight>
      </span>
    </div>
  );
};
