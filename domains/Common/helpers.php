<?php

if (!function_exists('remove_non_digits')) {
    function remove_non_digits(string | null $str): string
    {
        return preg_replace('/[^0-9]/', "", $str);
    }
}
