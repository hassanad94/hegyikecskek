import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'
import home from './home';
import coaches from './coaches';
import reviews from './reviews';
import socials from './socials';


export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    home,coaches,reviews,socials
  ]),
})
