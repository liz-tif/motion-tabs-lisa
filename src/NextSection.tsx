/**
 * NextSection — anchor section
 *
 * Status: DONE. Nothing to build here. This is just a second full-screen
 * section so that ScrollHero has something to scroll TO.
 *
 * Without this, scrollYProgress never moves and the hero animation looks
 * broken. Engineering Punkt: every Motion demo needs a real scrollable
 * page, not an empty viewport. Mandy's repo has the same pattern.
 */

export function NextSection() {
  return (
    <section className="min-h-[50vh] bg-[var(--color-bg)]" />
  )
}
