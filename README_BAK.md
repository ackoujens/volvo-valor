# Volvo Valor

`http://volvovalor.com`

## How to run

### Client

1. cd into `client` folder
2. run `ng serve -o`

## TODO

### Seperate CMS from Frontend client

- Seperation will make it harder to make an overlayish or coherent CMS experience
- Keeping them together will increase total application size/load times (can be loaded when logged in as admin only?)
- Start off by seperating them will be simplest

### Design Models

Adding basics models actually needed for presenting a basic Volvo Valor webpage

- Post (blog post, vlog post)
- Vehicle (collection of worked on or owned cars)
- Project (repair project, modification project, overhaul project, research project)
- Item (for keeping inventory)