# Intrst

[Live Demo](https://intrst.herokuapp.com/)

Intrst is a lifestyle website, inspired by Pinterest. This site was built over a two week period, although I will continue to make improvements over time.

Intrst employs Ruby on Rails, React/Redux, and utilizes AWS S3 ActiveStorage. 

## Features 

* User accounts, with secure authentication both on the front-end and back-end. User is bootstrapped on the front-end.
* Users can create pins and boards, as well as add/remove pins from boards.
* Modals are used to render forms and detail views.
* Pages feature a Masonry layout built from scratch.
* Discovery page features an infinite scroll built from scratch.
* Design is responsive and adapts to the users screen size.

## Masonry Layout

This masonry layout is responsive and re-organizes columns of images formulated on breakpoints for the best user experience on screens of all sizes. 

![Masonry Grid Full Screen](https://github.com/domobritton/Intrst/blob/master/pinterest/Screen%20Shot%202018-10-19%20at%209.12.18%20AM.png)

Columns resize from 4, 3, 2, or 1 column. 

### Example of 2 column layout on smaller screen
![Masonry Grid Small Screen](https://github.com/domobritton/Intrst/blob/master/pinterest/Screen%20Shot%202018-10-19%20at%209.31.41%20AM.png)

This was accomplished by comparing hard-coded breakpoints to the offsetWidth of the Masonry columns (width %) to determine how many columns to allow on the page. **No libraries were used in the creation of this feature**.

```js

  // let breakPoints = [500, 700, 1150];
  
	getColumns(w) {
	  return this.props.breakPoints.reduceRight( (p, c, i) => {
	    return c < w ? p : i;
	  }, this.props.breakPoints.length) + 2;
	}

	onResize() {
	  if (this.refs.Masonry === undefined) {
	    return null;
	  }
	  const columns = this.getColumns(this.refs.Masonry.offsetWidth);
	    if (columns !== this.state.columns){
	      this.setState({columns: columns});
	    }
            if (window.innerWidth < 500) {
	      this.setState({columns: 1});
	    }
	  }

```
## Infinite Scroll

This site utilizes an infinite scroll which updates the render based on the height of the window and by listening to the scroll of the user. Infinite Scroll was accomplished without the use of **any libraries**. 

```js
      if (
        window.innerHeight + document.documentElement.scrollTop
        >= document.documentElement.offsetHeight - 1000
      ) {
        this.loadPins();
      }
```
## Modals
Users can create boards, upload pins, and view pins using modals. Modals allow a user to stay on the same page. Users can open and close modals instantaneously, making navigation more efficient.

![Modal Example](https://github.com/domobritton/Intrst/blob/master/pinterest/Screen%20Shot%202018-10-19%20at%209.13.30%20AM.png)

## Future Features

### Search by tags

Users will be able to search for relevant images to display on their discovery feed.

### Edit, Update, Delete boards and pins

Each pin and board will be editable, updateable and deleteable.

### User follows

Users will be able to see other users profiles and follow users.

### Mobile friendly header with hamburger menu

Improvements will be made to make the navigation simple and intuitive on mobile devices.
