---
id: 49
title: How We Adopted an Agency-wide Grunt Workflow
date: 2013-12-02T16:52:10+00:00
author: JCutrell
templateKey: blog-post


dsq_thread_id:
  - "3000709380"
tags:
  - Thoughts

---
<p><strong>tldr;</strong> When adopting tools, do so to eliminate waste. It’s not worth adopting a tool for the sake of the clout of adopting it. For development, automate things you do the same often (or should/could do the same often). Build shareable processes that require little training overhead. Identify pieces of your process that require a common language; these places are usually where tools can be introduced to solidify that common language.</p>

<h2>Don’t mess with my flow.</h2>

<p>If you are a leader of a development team, you know that it can be hard to adopt any team-wide change in workflow. This is especially true if the new project tools are a significant shift away from the way you already work. The truth is, the overhead of managing the tools (instead of working on the project itself) can bog down your team, make for some confusion, and ultimately cause over-engineering and waste of time.</p>

<p>But the truth is, the evolving tools of web design are rising for a reason. Dependency management tools (or any kind of tool, for that matter) that are rising in fame should be evaluated. But where is the line? How can you know when its time to bite the bullet, buckle down, and learn the details of these tools? I think the answer is ultimately subjective, but I’ll share an anecdote with you about how we decided to move our team to a shared workflow that involves dependency management through Grunt, GitHub-centric code control, etcetera, while generally avoiding overhead.</p>

<h2>A Note About Dependency Management</h2>

<p>The goal of dependency management is to abstract away the details of manually managing toolsets that a project uses. In the Rails world, this is done in a <code>Gemfile</code>. In Node, it’s in a <code>package.json</code> file. Almost every project has some kind of dependency; it’s your job as a developer to make sure the dependencies are met in a suitable fashion. Furthermore, every project has different “build processes” - for some, this means compiling code. For others, this means setting environment variables or incrementing a “revision” count. Grunt is a highly-configurable tool that does many of these things for web-based projects. Powered by Node.js, Grunt and related projects have gained an enormous amount of support and active development contributions.</p>

<p>At Whiteboard, we are constantly starting new projects. This can happen even on a daily basis. What’s more, the developers are constantly iterating on and reviewing projects. Our work is highly communication-centric, with a focus primarily on a consumption orientation that is driven to develop brand voice. That’s a long way of saying we work more heavily with content publishing platforms than we do “web apps”.</p>

<p>For this reason, we adopted Wordpress long ago as our primary project platform, and have made Wordpress knowledge a core competency of our agency. We work in other areas (Rails, specifically) as well, but for spinning up a content publishing platform for a client, Wordpress is our go-to.</p>

<h2>Manual Dependency Management</h2>

<p>A year ago, our processes were very slim. I like to think of this as a Good Thing™. We worked quickly, and used tools as they popped up. In the Wordpress world, we found a few base themes (like <a href="http://themble.com/bones/">Bones</a>), and then threw our own self-brewed stuff on top. The development team is experienced enough to adopt a wide variety of tools, and this worked fine. But we started to notice problems creeping into our system: our tools were all <em>quite similar</em> amongst a set of projects, but none of them were dependably exactly the same. We also knew that the tools <em>could</em> be unified - we used the same basic types of tools/libraries/themes/structure on every single project.</p>

<p>We had adopted LESS, but were using CodeKit on our private machines without any global configuration. (CodeKit is awesome, and has these types of project-level options available, but we weren’t using them.) After a few accidental overwrites and other issues, we realized that everyone’s process, like our toolsets, were very similar, but just off enough to show cracks in our system.</p>

<h2>Makefiles</h2>

<p>Our first step towards a solution was to adopt a Bootstrap-inspired approach to compilation and project builds. Before Bootstrap 3, the process for compiling assets primarily revolved around a Makefile. We brewed up our own makefile, and created the first version of a theme we called Launchframe. This unified a lot of our tools, and immediately this increased our ability to communicate about projects to one another, without much hassle. The powerful element here is that our code started looking and feeling exactly the same (rather than relatively the same). We also all adopted native (Mac OS)AMP + phpMyAdmin stacks on our Mac OS machines, using Homebrew to get everything installed. This makes for predictable and very easily executable PHP-based projects. (There are quite a few guides for how to do this, including <a href="http://vanbosse.be/blog/detail/a-homebrew-lamp-stack">this Homebrew-specific one</a>.)</p>

<h2>Moving to Grunt</h2>

<p>The Makefile approach eventually started showing its flaws. Most specifically, some of the error reporting and watch scripts didn’t quite work as expected. While Make is certainly a powerful way to handle problems, we realized that people in our field were handling these same problems in a much more actively supported way through Grunt (and associated CLI tools). When Bootstrap 3 moved to Grunt, we made the move to Grunt, and once again adopted a lot of the techniques in the Bootstrap build process.</p>

<h2>The Trick</h2>

<p>The best way to reduce overhead for any kind of development process is to first <em>find your consistencies and near-consistencies</em>, and commit to them. Once you’ve made this commitment, build your tools to automate these consistencies. For us, we always use jQuery, we always use LESS, we always start with our base theme, and we always use a particular file structure. To make the process as easy as possible, we chose to commit to these consistencies, and build our workflow so that our developers need to only know the basic overview of the process. To start a new project at Whiteboard, you install Wordpress, change into that directory and type <code>npm install</code>. This will install all dependencies for the Grunt tasks to work properly. Then, run grunt watch. Develop on the project like you always do, and push live.</p>

<h2>A Step Further</h2>

<p>Who wants to install Wordpress? Wouldn’t it be nice if we could automate the whole process from front to back, and have a few prompts with configuration options along the way? Of course it would. So I made this script. Running this on a configured machine with the right tools does everything to open up the project, watching and ready to be edited. It’s also a lot of fun to run it, considering the colors <code>lolcat</code> provides. :) It utilizes a few tools here and there, particularly <code>wpcli</code>, to get things going. This could probably be grunt-ified, but ask yourself: why would that be valuable?</p>

<pre><code>#!/bin/bash
command -v lolcat &gt;/dev/null 2&gt;&amp;1 || { echo &gt;&amp;2 "I require lolcat but it's not installed. Run gem install lolcat."; exit 1; }
command -v wp &gt;/dev/null 2&gt;&amp;1 || { echo &gt;&amp;2 "I require Wordpress CLI but it's not installed. \n Run the following:\n curl https://raw.github.com/wp-cli/wp-cli.github.com/master/installer.sh | bash
."; exit 1; }
command -v git &gt;/dev/null 2&gt;&amp;1 || { echo &gt;&amp;2 "I require git. For more information, visit: http://git-scm.com/book/en/Getting-Started-Installing-Git "; exit 1; }

purple='\x1B[0;35m'
NC='\x1B[0m' # No Color


echo '

LAUNCHFRAME 0.1 #########
####### A WHITEBOARD TOOL

       !
       !
       ^
      / \
     /___\
    |=   =|
    |     |
    |     |
    |     |
    |     |
    |     |
    |     |
    |     |
    |     |
    |     |
   /|##|##|\
  / |##|##| \
 /  |##|##|  \
|  / ^ | ^ \  |
| /  ( | )  \ |
|/   ( | )   \|
    ((   ))
   ((  :  ))
   ((  :  ))
    ((   ))
     (( ))
      ( )
       .
       .
       .
' | lolcat

if [[ $1 == "" ]]; then
    read -p "Enter the site folder you want to create for installation: " sitefolder
else
    sitefolder=$1
fi

echo -e "${purple}Downloading Wordpress... Please wait a moment.${NC}"

mkdir -p "${sitefolder}" &amp;&amp; cd "${sitefolder}"

wp core download

echo -n "Enter database name (press enter for wp_${sitefolder}) "
read dbname
if [[ $dbname == "" ]]; then
    dbname="wp_$sitefolder"
fi

echo -n "Enter database username (press enter for root) "
read dbuser
if [[ $dbuser == "" ]]; then
    dbuser="root"
fi
read -p "Enter database password (required): " dbpass
while [[ $dbpass = "" ]]; do
    read -p "You cannot continue without entering a database password (required): " dbpass
done

echo -n "Enter site url (press enter for http://localhost/${sitefolder}) "
read siteurl
if [[ $siteurl == "" ]]; then
    siteurl="http://localhost/${sitefolder}"
fi

echo -n "Enter site title (press enter for ${sitefolder}) "
read sitetitle
if [[ $sitetitle == "" ]]; then
    sitetitle="${sitefolder}"
fi
echo -n "Enter admin email (press enter for admin@example.com) "
read adminemail
if [[ $adminemail == "" ]]; then
    adminemail="admin@example.com"
fi

echo -e "\n"
echo -e "${purple}Creating the wp-config file.${NC}"
echo -e "\n"

wp core config --dbname=$dbname --dbuser=$dbuser --dbpass=$dbpass

echo -e "\n"
echo -e "${purple}Creating the database.${NC}"
echo -e "\n"

adminpw='[filtered]'
adminun='admin'
wp db create
wp core install --url=$siteurl --title=$sitetitle --admin_name=$adminun --admin_password=$adminpw --admin_email="$adminemail"

echo -n "Install Multiple Post Thumbnails? (y/N) "
read a
if [[ ${a:0:1} == "Y" || ${a:0:1} == "y" ]]; then
    wp plugin install multiple-post-thumbnails
    wp plugin activate multiple-post-thumbnails
else
    echo -e "\n"
    echo -e "${purple}Run wp plugin install multiple-post-thumbnails to install later.${NC}"
    echo -e "\n"
fi

echo -n "Install Yoast SEO? (y/N)"
read a
if [[ ${a:0:1} == "Y" || ${a:0:1} == "y" ]]; then
    wp plugin install wordpress-seo
    wp plugin activate wordpress-seo
else
    echo -e "\n"
    echo -e "${purple}Run wp plugin install wordpress-seo to install later.${NC}"
    echo -e "\n"
fi

echo -e "\n"
echo -e "${purple}Downloading Launchframe...${NC}"
echo -e "\n"

wp theme install https://github.com/Whiteboard/launchframe/archive/master.zip

echo -e "\n"
echo -e "${purple}Activating Launchframe...${NC}"
echo -e "\n"

mv wp-content/themes/launchframe-master wp-content/themes/launchframe
wp theme activate launchframe
echo -n "Install Custom Meta Boxes? (y/N)"
read a
if [[ ${a:0:1} == "Y" || ${a:0:1} == "y" ]]; then
  git clone git@github.com:jaredatch/Custom-Metaboxes-and-Fields-for-WordPress.git wp-content/themes/launchframe/inc/cmb
  echo "Custom Meta Boxes requires a manual include and setup - be sure to add this in functions.php or somewhere similar."
fi

cd wp-content/themes/launchframe
npm install


echo -e "\n"
echo -e "${purple}Opening the site install...${NC}"
echo -e "\n"

open $siteurl

echo "Done!"
echo '
  ______   _______  _______  _______  _______ 
(  ___ \ (  ___  )(  ___  )(  ___  )(       )
| (   ) )| (   ) || (   ) || (   ) || () () |
| (__/ / | |   | || |   | || |   | || || || |
|  __ (  | |   | || |   | || |   | || |(_)| |
| (  \ \ | |   | || |   | || |   | || |   | |
| )___) )| (___) || (___) || (___) || )   ( |
|/ \___/ (_______)(_______)(_______)|/     \|


 ' | lolcat
subl ../../..
grunt watch
</code></pre>

<h2>Do What Keeps You Moving</h2>

<p>The thing we’ve learned about learning new tools is to find ways of constantly doing something new. This means stop doing the same things over and over. Wasting your time doing the same things over and over means you aren’t innovating, and you aren’t creating change. Don’t stop learning, but learn, implement, and move on to learning more and doing more. This is perhaps an opinionated understanding of the purpose of learning as it applies to development, but it certainly offers a strong method for balancing intellectual progress and business-oriented productivity.</p>
