#!/bin/bash
while :
do	
	git pull
	cp -r * ../public_html/
	rm ../public_html/script.sh
	sleep 1m
done
