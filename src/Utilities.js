///
/// Common Utilities
///

const DateTimeFormatter = imports.misc.extensionUtils.getCurrentExtension().imports.DateTimeFormatter;
const Gtk = imports.gi.Gtk;

///
/// Convert string to datetime format.
///
/// @param {string} format - Format to convert into a datetime string.
/// @param {string} defaultFormat - Format to use if 'format' is null or empty.
/// @return {string} Datetime representation of format, or format if the conversion fails, or datetime representation of defaultFormat, or blank.
///
function dateTimeFormat(format, defaultFormat) {
    if (format) {
	return DateTimeFormatter.dateToString(format);
    } else {
	return DateTimeFormatter.dateToString(defaultFormat);
    }
}

///
/// Get the Gtk.Builder with the specified glade contents.
///
/// @param {string} gladeContent - Glade file contents.
/// @return {Gtk.Builder} Gtk.Builder for the glade contents.
///
function getBuilder(gladeContent) {
	return Gtk.Builder.new_from_string(gladeContent, gladeContent.length);
}
