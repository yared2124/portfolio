import React, { useState, useMemo } from 'react'
import type { TechCategory, TechItem } from '../data/portfolioData'
import { TechIcon } from './TechIcons'

interface TechStackProps {
  categories?: TechCategory[]
  stack?: string[]
}

export const TechStack: React.FC<TechStackProps> = ({ categories = [], stack = [] }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all')

  // Collect all items across categories or fallback to string stack
  const allItems: TechItem[] = useMemo(() => {
    if (categories.length > 0) {
      return categories.flatMap((cat) => cat.items)
    }
    return stack.map((name) => ({
      name,
      icon: name.toLowerCase().replace(/[^a-z0-9]/g, ''),
      category: 'General',
    }))
  }, [categories, stack])

  // Filtered items based on selected category tab
  const displayedItems = useMemo(() => {
    if (activeCategory === 'all') return allItems
    const target = categories.find((c) => c.id === activeCategory)
    return target ? target.items : allItems
  }, [activeCategory, categories, allItems])

  // Marquee list (duplicate array for seamless infinite loop)
  const duplicatedMarquee = useMemo(() => {
    return [...allItems, ...allItems]
  }, [allItems])

  const categoryFilterList = useMemo(() => {
    return [
      { id: 'all', label: 'All', count: allItems.length },
      ...categories.map((cat) => ({
        id: cat.id,
        label: cat.name.split('/')[0].trim(),
        count: cat.items.length,
      })),
    ]
  }, [categories, allItems.length])

  return (
    <section className="stack-section" id="skills" aria-label="Technology stack & tools">
      <div className="stack-intro shell">
        <div className="stack-header-left">
          <span className="stack-eyebrow">02 / TECH STACK & TOOLS</span>
          <h2 className="stack-title">Engineered for Scale & Speed</h2>
        </div>
        <p className="stack-description">
          Production stack spanning frontend interfaces, scalable backends, container orchestration, and team toolchains.
        </p>
      </div>

      {/* Kinetic Infinite Marquee */}
      <div className="stack-marquee" aria-label="Animated technology list">
        <div className="stack-track">
          {duplicatedMarquee.map((item, index) => {
            const displayIndex = String((index % allItems.length) + 1).padStart(2, '0')
            return (
              <div
                className="stack-item"
                key={`${item.name}-${index}`}
                aria-hidden={index >= allItems.length}
              >
                <span className="stack-item-idx">{displayIndex}</span>
                <div className="stack-item-content">
                  <span className="stack-item-icon">
                    <TechIcon name={item.icon} size={16} />
                  </span>
                  <strong>{item.name}</strong>
                </div>
                {item.badge && (
                  <span className="stack-item-badge">{item.badge}</span>
                )}
              </div>
            )
          })}
        </div>
      </div>

      {/* Interactive Categorized Grid */}
      <div className="stack-grid-container shell">
        {/* Category Filter Pills */}
        <div className="stack-filter-bar" role="tablist" aria-label="Filter tech stack by category">
          {categoryFilterList.map((tab) => {
            const isActive = activeCategory === tab.id
            return (
              <button
                key={tab.id}
                role="tab"
                aria-selected={isActive}
                className={`stack-filter-pill ${isActive ? 'active' : ''}`}
                onClick={() => setActiveCategory(tab.id)}
              >
                <span>{tab.label}</span>
                <span className="stack-filter-count">{tab.count}</span>
              </button>
            )
          })}
        </div>

        {/* Compact Tech Grid */}
        <div className="tech-cards-grid">
          {displayedItems.map((item, idx) => {
            const itemNumber = String(idx + 1).padStart(2, '0')
            return (
              <div className="tech-card" key={`${item.name}-${idx}`}>
                <div className="tech-card-left">
                  <div className="tech-card-icon-wrap">
                    <TechIcon name={item.icon} size={18} />
                  </div>
                  <div className="tech-card-info">
                    <div className="tech-card-title-row">
                      <span className="tech-card-num">{itemNumber}</span>
                      <h3 className="tech-card-name">{item.name}</h3>
                    </div>
                    <span className="tech-card-category">{item.category}</span>
                  </div>
                </div>

                {item.badge && (
                  <span className="tech-badge-highlight">{item.badge}</span>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
