# New Grid Times — Module 7 workshop

In this workshop, our goal is to build a sophisticated, responsive grid layout for an online newspaper, the New Grid Times:

![Desktop-sized mockup](/docs/desktop-mockup.png)

## Code structure

Like the last few workshops, this is a React / styled-components application.

This application is built using a **mobile-first methodology**. We're starting from a place of having almost-finished mobile styles; your mission is to add that last bit of polish on mobile, and then implement the tablet/laptop layouts specified in the designs.

Some design tokens, including colors, fonts, and media queries have been provided in `src/constants.js`. The colors and fonts have also been applied as global CSS variables in `src/components/GlobalStyles`.

Here's the full list of available CSS variables:

```
--color-white
--color-offblack
--color-gray-100
--color-gray-300
--color-gray-500
--color-gray-700
--color-gray-900
--color-primary      <-- dark blue
--color-secondary    <-- green
--color-urgent       <-- red

--font-weight-normal
--font-weight-medium
--font-weight-bold

--font-family-serif
--font-family-sans-serif
--font-family-logo
```

---

The app is broken into 4 main compartments:

- The header
- The main story grid
- The "specialty" story grid
- The footer

The main story grid holds the big featured story, the secondary stories, and the opinion/editorial stories. The "specialty" story grid holds the market and sports sections.

The data for the stories is held in a JS file, `src/data.js`. In a real app, this would be read from a database.

## Troubleshooting

If you run into problems running a local development server, check out our [Troubleshooting Guide](https://courses.joshwcomeau.com/troubleshooting) on the course platform.

This guide addresses the common `Digital Envelope Routine` error you may have seen.

---

## Exercise 1: Header

Like in the Sole&Ankle workshop, this workshop features a two-step header that changes between desktop and mobile.

This workshop has been created with a "Mobile-first" methodology, and so your goal this time is to create a desktop variant of the header, and ensure the right header is used at both viewport sizes.

![Highlighted screenshot showing the header of the mockup](/docs/header-cutout.png)

---

## Exercise 2: Prep and Polish

Before we start working on the tablet and laptop grid layouts, we need to add a bit of missing polish to the mobile implementation, and prep certain elements to make it easier to create our tablet/laptop grids.

This exercise is split into a few mini-parts:

### Text truncation

In the mockup, our main story's preview text is truncated on mobile after 8 lines of text:

![Close-up of the preview text on mobile](/docs/text-truncation-mobile.png)

The exact # of lines shown depends on the viewport size. For example, the amount of lines doubles on tablet:

![Close-up of the preview text on mobile](/docs/text-truncation-tablet.png)

> **Note:** on certain screen sizes, you may see an ellipsis alone on its own line. Don't worry about trying to solve for this.

The syntax for multi-line ellipsis is difficult to remember, so you might wish to [review the lesson from Module 6](https://courses.joshwcomeau.com/css-for-js/06-typography-and-media/03-text-overflow#multi-line-ellipsis).

### Story borders

There are also dividers between the stories that are in lists, like the secondary and opinion stories:

![Close-up showing the thin dividers between stories on mobile](/docs/dividers.png)

Critically, the borders only run _between_ stories. Not above the top story, or below the last story.

A good place to start is in `MainStoryGrid.js`. That's where all of these stories are laid out.

### Opinion avatar placement

Opinion stories show a picture of the journalist. On mobile, this image is meant to be shifted off to the side:

![Close-up of the Opinion section on mobile, highlighting the avatars](/docs/mobile-avatar-position.png)

This same layout is used on laptop, but not on tablet. Update it across all relevant viewport sizes.

---

## Exercise 3: Main story grid

Alright, time to create our first responsive grid!

Update the `MainStoryGrid` component to support the layouts shown in Figma for tablet and laptop.

There are some interesting details that are easy to miss:

### Swapped OpinionStory styles

In the last exercise, we updated our "Opinion" stories so that the avatar was shifted off to the side on mobile and laptop sizes.

In our new tablet grid, the opinion section itself takes on a different layout:

![Close-up of the Opinion section on tablet, showing the new layout](/docs/opinion-row.png)

Our stories are arranged horizontally in a row, instead of vertically in a column. The borders between stories disappear.

We'll need to dip into `OpinionStory.js` and make some changes based on the viewport size. A `TabletOnly` query can be used for this case.

### Swapped SecondaryStory styles

Similarly, on tablet, our `SecondaryStory` switches to a new layout.

On mobile/laptop:

![Close-up of a "secondary" story on mobile](/docs/secondary-mobile.png)

On tablet:

![Close-up of a "secondary" story on tablet](/docs/secondary-tablet.png)

### Grid dividers

When our grid grows to have multiple columns, we want to add a thin grey line between the columns:

![Highlighted screenshot of the dividers between rows and columns on the desktop grid](/docs/desktop-dividers.png)

We discuss strategies for this situation in the [“Grid Dividers” lesson](https://courses.joshwcomeau.com/css-for-js/07-css-grid/11-grid-dividers).

### Optional: Optical alignment

After creating the grid, you may find that certain things don't sit completely right. Compare the output to the design, and look for opportunities to shift things around to match a bit more perfectly.

---

## Exercise 4: Specialty Story grid

Underneath the main grid we've been working on, we have another grid, with specialized items about markets and sports.

On mobile, we can use the [“World Famous” grid snippet](https://courses.joshwcomeau.com/css-for-js/07-css-grid/09-fluid-grids) to arrange both the market cards and the sports stories.

When we get to the larger viewports, though, the sports stories operate a little bit differently: they form a single long line, with overflow to allow us to scroll horizontally:

![Highlighted screenshot of the dividers between rows and columns on the desktop grid](/docs/sports-overflow.gif)

Finally, on large viewports, we want the market and sports sections to sit side-by-side, with a divider:

![Highlighted screenshot of the dividers between rows and columns on the desktop grid](/docs/specialty-grid-desktop.png)

---

## Exercise 5: Footer

Last but not least, the footer!

There are some alignment changes between different viewport sizes, like the `TopRow` and `SubFooter`:

![Highlighted screenshot of the alignment of the top/bottom elements in the footer on desktop](/docs/footer-diagonals.png)

We also need to switch from a vertical list to a dynamic grid, for the main nav links:

![Screenshot of the footer's main nav on tablet](/docs/footer-main-nav-tablet.png)

Finally, we want the columns on desktop to be equally-spaced:

![Screenshot of the footer's main nav on desktop](/docs/footer-link-alignment.png)

---

## Solution

View the solution on the course platform:
https://courses.joshwcomeau.com/css-for-js/07-css-grid/19-workshop-solution

## Note to self

### Exercise 1

#### Centering a middle element in a header

In the Sole & Ankle workshop this was done using Flexbox, where the two outer elements were set to `flex: 1`, so that they both grew an equal amount from the sides, and effectively squeezed the middle element into the centre.

Here, we used CSS Grid to do something very similar. The way this is done using Grid is to set the column widths in this way:

```
  display: grid;
  grid-template-columns: 1fr auto 1fr;
```

By using `auto` we are saying we want the middle column to be as small as that element's intrinsic size, but the other columns with `1fr` for their width should greedily consume an equal amount of space between them.

![Screenshot of the grid lines in the header](/docs/header_grid.png)

We also have to justify the items (child elements of the grid) relative to their column. So on the grid container we can do:

```
justify-items: start;
```

That makes the group of buttons (menu and search) to be positioned on the left side of their column. But we need to change the behaviour of the 'SUBSCRIBE' button so that it is positioned at the right of its column, and we do that with this:

```
justify-self: end;
```

Another small detail is that we wanted to align the three elements in the centre so that if you drew a line across you'd see the main buttons line up:

![Screenshot of the button alignment in the header](/docs/header_alignment.png)

So, we can have centre alignment by applying the following in the grid container rule:

```
align-items: center;
```

But the `Already a subscriber?` link causes an issue with this alignment. So, the solution here is to give it absolute positioning. If we do this and don't use `top`, etc, and make the subscribe wrapper relative positioned, then the link just naturally sits below the button, and only small tweaks are needed to move it around:

```
width: 100%;
text-align: center;
margin-top: 8px;
```

### Exercise 2

#### Text truncation

So to clamp the number of lines that get shown and show an ellipsis at the end we just lump in this snippet:

```
display: -webkit-box;
-webkit-box-orient: vertical;
-webkit-line-clamp: 4;
overflow: hidden;
```

However, there occasionally can be this weird behaviour where the very top of the overflow that should be hidden peeks through:

![Screenshot of overflow text showing in a weird, clipped off way](/docs/algos_at_war.png)

Reason: conflicting height calculating algorithms between what the line clamping snippet does above and what grid does to stretch the content (I think the default is `align-items: stretch;`).

Solution 1: Wrap the paragraph box in a wrapper and have that be the child element of the grid container instead:

```
<AbstractWrapper>
  <Abstract>...</Abstract>
</AbstractWrapper>

const AbstractWrapper = styled.div`
  grid-area: abstract;
`;
```

Solution 2: Stop the stretchy thing grid does by using `align-self: start;` on the paragprah box:

```
const Abstract = styled.p`
  grid-area: abstract;
  align-self: start;
`;
```

#### Story borders

Here, we want to apply borders between each story:

![Screenshot of the borders wanted between each story](/docs/story_border.png)

We require `16px` of space between the story and the border. The structure of this section of the page is like this:

```
<StoryList>
  {SECONDARY_STORIES.map((story, index) => (
    <SecondaryStory key={story.id} {...story} />
  ))}
</StoryList>
```

So, the general solution is, for each story except the last, to apply:

```
padding-bottom: 16px;
border-bottom: 1px solid var(--color-gray-300);
margin-bottom: 16px;
```

Initially this CSS was put into the `<StoryList>` component like this:

```
const StoryList = styled.div`
  display: flex;
  flex-direction: column;
  --spacing: 8px;

  & > :not(:last-child) {
    padding-bottom: var(--spacing);
    border-bottom: 1px solid var(--color-gray-300);
    margin-bottom: var(--spacing);
  }
`;
```

However, this isn't the best approach because we are **applying styles to a different component**. The reason we are doing this is because we don't want to apply the styles inside of `<SecondaryStory>` because we might want to use that component in a different setting.

The best approach then is to create a new wrapper styled component `<VerticalStoryWrapper>` that presents stories in this way.

```
<StoryList>
  {SECONDARY_STORIES.map((story, index) => (
    <VerticalStoryWrapper key={story.id}>
      <SecondaryStory {...story} />
    </VerticalStoryWrapper>
  ))}
</StoryList>

const VerticalStoryWrapper = styled.div`
  --spacing: 8px;

  &:not(:last-of-type) {
    padding-bottom: var(--spacing);
    border-bottom: 1px solid var(--color-gray-300);
    margin-bottom: var(--spacing);
  }
`;
```

### Exercise 3

This was where the main grid area stuff was done.

The only real thing worth mentioning is that on the wide desktop layout, the columns were set to:

```
grid-template-columns: 5fr 4fr 3fr;
```

This had the ideal ratio of column widths corresponding to the type of content. `3fr 2fr 1fr` would have been too much of a difference between columns, while something like `8fr 7fr 6fr` would be too little. It's a small note, but it made a lot of sense given the layout of main story - secondary stories - opinion stories.

![Screenshot of the grid columns on desktop](/docs/desktop_column_widths.png)

Also notice how the `gap`'s have gone on desktop. Instead we have these sneaky borders giving the illusion of their being a gap.

### Exercise 4

#### That World Famous Grid snippet

```
grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
```

This snippet is saying to make every column 200px wide, but if there's more space, let it grow and fill up to 400px. The `auto-fill` adapts the number of columns based on the viewport size. So, basically, whatever screen size you have, this container can adapt.

Here's how it looks on tablet:

![Screenshot of fluid grid items on tablet](/docs/fluid_items.png)

and on mobile:

![Screenshot of fluid grid items on mobile](/docs/fluid_items2.png)

and nary a media query in sight.

#### Getting that overflow goodness

On tablets and above, we want the sports stories to overflow on the same row. So the solution is to set it to `display: flex;` and give each story a `min-width: 220px`. This creates both an overflow, which messes with our grid:

![Screenshot of overflowing element causing grid malfunction](/docs/grid_weirdness.png)

The reason for the above is that by default, the width of the grid column is `auto`, and it will try to fit the width of its child elements as best as it can. The solution then is to add this to the grid container:

```
grid-template-columns: minmax(0px, auto);
```

This says that we want one column, but it doesn't have to be as wide as it needs to fit the child element that is causing an overflow (alternatively could set it to `100%`).

That solves that. Then to contain the overflow, we need to set the flex container `overflow: auto;`.

Another thing worth mentioning. For some reason, the scrollbar didn't show up, maybe because of my system settings. So, I added some custom styles to make the scroll bar show up regardless of user settings.

```
&::-webkit-scrollbar {
  -webkit-appearance: none;
  width: 4px;
}
&::-webkit-scrollbar-thumb {
  border-radius: 8px;
  background-color: var(--color-gray-300);
  -webkit-box-shadow: 0 0 1px rgba(255, 255, 255, 0.5);
}
```
