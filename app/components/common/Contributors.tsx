"use client";

import { cn } from '../config/utils/cn';
import { type Contributor, useContributors } from './hooks';

export const Contributors = () => {
  const { contributors, isLoading } = useContributors();
  const columns = contributors.length <= 10 ? contributors.length : 10
  const contributorsClasses = 'overflow-x-auto mt-5'

  const renderContributors = (contributorList: Contributor[]) => {
    return contributorList.map((contributor, index) => (
      <a
        href={`https://github.com/${contributor.username}`}
        key={contributor.username + ' ' + index}
        className="contributor"
        aria-label={`Contributor: ${contributor.username}`}
      >
        {isLoading ? (
          <div className="w-12 h-12 bg-cGray" />
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={contributor.avatarUrl} alt={`Contribuidor: ${contributor.username}`} />
        )}
      </a>
    ));
  };

  return (
    <section className="text-center my-10">
      <h4 className="text-3xl text-white">Contribuidores del desarrollo</h4>
      <div className="mt-10">
        {contributors.length > 0 && (
          <div
            className={cn('contributors', contributorsClasses)}
            style={{ '--contributor-count': columns, '--contributor-size': '4.5rem' } as any}
            >
              {renderContributors(contributors)}
          </div>
        )}
      </div>
    </section>
  );
};
