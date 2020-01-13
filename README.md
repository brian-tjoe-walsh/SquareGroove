# SquareGroove

[SquareGroove site](https://squaregroove.herokuapp.com/#/)

`SquareGroove` is a programmable audio synthesizer, created by 3 engineers over the span of 5 days. Our goal was to provide an intuitive way for those who have little to no music background to begin creating their own songs. We wanted to give everyone the opportunity to love the process of making music, and hopefully provide a foundation for a future in music learning and creation.

## Technology used:
* React/Redux for frontend rendering
* Express.js for backend MVC framework
* MongoDB and AWS S3 for database

## Features
The grid interface allows for users to program notes by clicking individual squares, pausing and playing the program, switching between different samples in the navigation bar, as well as change the BPM (beats per minute) of the song.
Users can create and save their own grids, as well as listen to other grids in the community.


## Login & Sign Up
SquareGroove's sessions use a modal, enabling users to seamlessly login & sign up on any page. Also, the process of animating a login/signup form similar to SoundCloud can be implemented using a number of methods, with this example using the @keyframes HTML rule. 

```
@keyframes slideDown {
  from {
    transform: translate3d(0%, -150%, 0);
    visibility: visibility;
    }
  to {
    transform: translate3d(0%, 0%, 0)}
}
```

## Media Player
In order to emulate the original SoundCloud website, the media player is implemented in a way that will continually play while users switch from different pages. The music player uses the same functionality as soundcloud, with a play/pause button, a scroll bar, displaying the current time of the song's progress, as well as the added option of downloading the audio file directly. React was used in order to create a seamless music player. Although the player will re-render on website refreshing, the component only has to render once upon the site's initial loading. 

```
<div>
  <ProtectedRoute exact path="/albums/:albumId" component={AlbumShowContainer} />
  <ProtectedRoute exact path="/albums" component={AlbumsIndexContainer} />
  <ProtectedRoute exact path="/artists/:artistId" component={UserShowContainer} />  
  <ProtectedRoute exact path="/artists" component={UsersIndexContainer} />  
  <ProtectedRoute path="/discover" component={DiscoverContainer} />
  <ProtectedRoute path="/library" component={LibraryContainer} />
  <ProtectedRoute path="/upload" component={UploadingContainer} />
  <AuthRoute path="/" component={SplashContainer} />
  <AuthRoute exact path="/login" component={LoginFormContainer} />
  <AuthRoute exact path="/signup" component={SignupFormContainer} />
  <Redirect to="/discover" />
  <MediaPlayerContainer />
</div>
```

### Albums
An engineering decision made for SlowCloud is the incorporation of specific albums, in order to bridge the gap between SoundCloud's flexible song-uploading and a conventional streaming platform. While songs on Soundcloud can be arranged and sorted into playlists--which can operate similarly to albums--SlowCloud operates under the assumption that the content being uploaded is intended for professional consumption, and will be classified under an Album tag by default. This constituted a separate MVP to categorize albums, which are not only connected to users, but also songs. 

### Uploading Songs
Uploading a song can be done at any page in the Navbar. The form, similarly to SoundCloud's website, has two main parts-- uploading a specific file, and adding titles/pictures/descriptions to the file. Switching from these parts uses animation, as well as jQuery calls in order to add and remove class's from the React components modularly, depending on the user's actions. 

```
let midPage = document.getElementsByClassName("uploadForm");
    $(midPage).addClass("uploadFormAfterClick");
```

### Planned future features
* Comments
* Playlists
* Likes
