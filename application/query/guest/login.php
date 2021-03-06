<?php defined('BASEPATH') OR exit('No direct script access allowed');

/*===============================================================
* CodeIgniter CI_Pretty
* @package	CI_BaseConfig
* @author	Harjito
* @license  http://opensource.org/licenses/BSD-3-Clause 3-clause BSD
* @copyright	Copyright (c) 2017 - 2018, eProject Technology. (https://e-project-tech.com/)
===============================================================*/

$obj = new stdClass();
$obj->table = 'users u';
$obj->select = 'u.id, u.password, GROUP_CONCAT(g.name SEPARATOR "|") as roles';
$obj->join = [
	['users_groups ug','ug.user_id=u.id','inner'],
	['groups g','g.id=ug.group_id','inner']
];
$obj->field = [
		'identity'=>'required|regex_match[/[A-Za-z0-9\.\_\@]/]|min_length[6]|max_length[50]',
		'password'=>'required|min_length[6]|max_length[20]',
];
$obj->key = 'identity';
