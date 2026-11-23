/**
 * Swizzled from @docusaurus/theme-classic so sidebar year labels do not render
 * as <h3> before the page's primary <h1> in DOM order.
 */
import React, {memo} from 'react';
import {useThemeConfig} from '@docusaurus/theme-common';
import {groupBlogSidebarItemsByYear} from '@docusaurus/plugin-content-blog/client';

function BlogSidebarYearGroup({year, yearGroupHeadingClassName, children}) {
  return (
    <div role="group">
      <div className={yearGroupHeadingClassName}>{year}</div>
      {children}
    </div>
  );
}

function BlogSidebarContent({items, yearGroupHeadingClassName, ListComponent}) {
  const themeConfig = useThemeConfig();
  if (themeConfig.blog.sidebar.groupByYear) {
    const itemsByYear = groupBlogSidebarItemsByYear(items);
    return (
      <>
        {itemsByYear.map(([year, yearItems]) => (
          <BlogSidebarYearGroup
            key={year}
            year={year}
            yearGroupHeadingClassName={yearGroupHeadingClassName}>
            <ListComponent items={yearItems} />
          </BlogSidebarYearGroup>
        ))}
      </>
    );
  }
  return <ListComponent items={items} />;
}

export default memo(BlogSidebarContent);
