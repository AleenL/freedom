import $ from 'jquery'

export default function() {
    var hello = $("<div>nihao<div>");
    return hello.get(0);
}