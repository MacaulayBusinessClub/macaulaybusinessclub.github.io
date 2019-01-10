<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'i3241458_wp1');

/** MySQL database username */
define('DB_USER', 'i3241458_wp1');

/** MySQL database password */
define('DB_PASSWORD', 'W#D0UZh5U@fW#K&PU1(13@#3');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'jt1IOl891vyGphbeasV6EeCCEo6HTpMpbdL5hgM4Q4XkqiipAUv1jZGkdOnrhLJo');
define('SECURE_AUTH_KEY',  'DcIB3Ymk5DL0BwLvZPY8yWV5rIEqvlhd4qbSowFCHfm43o9hkBysWZu14os4Hu4q');
define('LOGGED_IN_KEY',    'xiYVyN57Atsb8uP9iSfSwLa3k0iDPBlKiwokPwhIFrZjoL9lKnr9x5NHZTzQa0LP');
define('NONCE_KEY',        'MLLEAibci6plR2jL0dwmnt2c0C3TjBlycpfIbHffuWa3OEOgxZwGW1KIi3FyOiq8');
define('AUTH_SALT',        '8R5BNIspHTYy7aY5WFW2FmPBuwNT7mefsrYX4m9SWYBTlUCVqm7WDnQH71ygbtMD');
define('SECURE_AUTH_SALT', 'MxeGM9ctaqC7WYTRc9uI6cmczCbCcnoPgrhVCsJl4yFxM3R778HjmSQpXT2sUVGS');
define('LOGGED_IN_SALT',   'dHIYxeLezTcCYVPbG0NpPAL6VfpxGH0747PtsFL1E3tZlnpal9yYIzN6DLpIK9Zv');
define('NONCE_SALT',       'cwzlCJiwWH5KDWg4O8bl43iwpgjl8l5LGceF7DDxLeDiAdDgQDC79n38EAlV5Wfx');

/**
 * Other customizations.
 */
define('FS_METHOD','direct');define('FS_CHMOD_DIR',0755);define('FS_CHMOD_FILE',0644);
define('WP_TEMP_DIR',dirname(__FILE__).'/wp-content/uploads');

/**
 * Turn off automatic updates since these are managed upstream.
 */
define('AUTOMATIC_UPDATER_DISABLED', true);


/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
